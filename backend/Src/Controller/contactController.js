const ContactModel = require("../Model/ContactModel");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const { responseReturn } = require("../Utils/response");

class ContactController {
Create = async (req, res) => {
    const { id } = req;
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return responseReturn(res, 500, { error: err.message });
      }
      let { Image } = files;
      let { name, email, phone, address } = fields;

      // Ensure fields are not arrays
      name = Array.isArray(name) ? name[0] : name;
      email = Array.isArray(email) ? email[0] : email;
      phone = Array.isArray(phone) ? phone[0] : phone;
      address = Array.isArray(address) ? address[0] : address;

      cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true
      });

      try {
        const result = await cloudinary.uploader.upload(Image[0].filepath, { folder: 'Contact' });

        if (result) {
          const contact = await ContactModel.create({
            name,
            email,
            phone, // Corrected to match the model field name
            address, // Corrected to match the model field name
            Image:result.url
          });
          console.log('Cloudinary Upload Result:', result);

          responseReturn(res, 201, { contact, message: 'Contact Add Success' });
        } else {
          responseReturn(res, 404, { error: 'Image upload failed' });
        }
      } catch (error) {
        responseReturn(res, 500, { error: 'Internal server error' });
      }
    });
  };

  Read = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    const { id } = req;
    const skipPage = parseInt(parPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
        const contact = await ContactModel.find({
          $text: { $search: searchValue },
          contactId: id,
        })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });

        const totalContact = await ContactModel.find({
          $text: { $search: searchValue },
          contactId: id,
        }).countDocuments();

        responseReturn(res, 200, { totalContact, contact });
      } else {
        const contact = await ContactModel.find({ contactId: id })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalContact = await ContactModel.find({
          contactId: id,
        }).countDocuments();

        responseReturn(res, 200, { totalContact, contact });
      }
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: error.message });
    }
  };

  Update = async () => {
    let { name, email, phone, address, Image } = req.body;
    name = name.trim();
    email = email.trim();
    phone = phone.trim();
    address = address.trim();

    try {
      await ContactModel.findByIdAndUpdate(contactId, {
        name,
        email,
        phone,
        address,
        Image,
      });

      const contact = await ContactModel.findById(contactId);

      responseReturn(res, 200, { contact, message: "contact update success" });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  Delete = async () => {
    try {
      const contact = await ContactModel.findByIdAndDelete(req.params.id);
      if (!contact) {
        return res.status(404).send({ error: "Contact not found" });
      }
      res.status(200).send(contact);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

module.exports = new ContactController();
