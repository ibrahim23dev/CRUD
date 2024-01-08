const ContactModel = require('../Model/ContactModel');

class ContactController {
    Create = async (req, res) => {
        try {
    const contact = new ContactModel(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
    }

    Read = async (req, res) => {
        try {
    const contacts = await ContactModel.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
    }

    Update = async () => {
        try {
    const contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!contact) {
      return res.status(404).send({ error: 'Contact not found' });
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
    }
    Delet = async () => {
        try {
    const contact = await ContactModel.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).send({ error: 'Contact not found' });
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
    }
    
}


module.exports =new ContactController();