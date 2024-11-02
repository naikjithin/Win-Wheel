const Userdata = require('../models/userdata.model.js');
const excelbuilder = require('msexcel-builder');

// Create and Save a new userdata
exports.create = (req, res) => {
    console.log(req.body.uid);
    // Validate request
    if (!req.body.uid && !req.body.name) {
        return res.status(400).send({
            message: "userdata content can not be empty"
        });
    }

    // Create a Note
    const userdata = new Userdata({
        uid: req.body.uid || "empty uid",
        name: req.body.name
    });

    // Save Note in the database
    userdata.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the userdata."
            });
        });
};

// Retrieve and return all userdata from the database.
exports.findAll = (req, res) => {
    Userdata.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving userdata."
            });
        });
};

// Retrieve and return all userdata from the database.
exports.getxls = (req, res) => {
    Userdata.find()
        .then(userdata => {
            text = '';
            userdata.forEach(item => {
                text = text+"</br>"+item.uid+", "+item.name;
            })
            res.send(text);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving userdata."
            });
        });
};






// Find a single userdata with a id
exports.findOne = (req, res) => {
    Userdata.findById(req.params.userId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Userdata not found with id " + req.params.userId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Userdata not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.userId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};