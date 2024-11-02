const mongoose = require('mongoose');

const UserdataSchema = mongoose.Schema({
    uid: String,
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Userdata', UserdataSchema);