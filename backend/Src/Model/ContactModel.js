const mongoose = require('mongoose');
const ContactScema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    }

})
const ContactModel = mongoose.model('Contact', ContactScema);
module.exports = ContactModel;