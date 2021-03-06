const Contraception = require('../models/contraception');

//Create new Contraception
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Contraception content can not be empty"
        });
    }
    // Create a Contraception
    const contraception = new Contraception({
        contraception_name: req.body.contraception_name
    });

    // Save Contraception in the database
    contraception.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the contraception."
        });
    });
};

// Retrieve all Contraceptions from the database.
exports.findAll = (req, res) => {
    Contraception.find()
    .then(contraceptions => {
        res.send(contraceptions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving contraceptions."
        });
    });
};

// Find a single contraception with a contraceptionId
exports.findOne = (req, res) => {
    Contraception.findById(req.params.contraceptionId)
    .then(contraception => {
        if(!contraception) {
            return res.status(404).send({
                message: "contraception not found with id " + req.params.contraceptionId
            });            
        }
        res.send(contraception);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "contraception not found with id " + req.params.contraceptionId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving contraception with id " + req.params.contraceptionId
        });
    });
};

// Update a Contraception
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Contraception content can not be empty"
        });
    }

    // Find and update Contraception with the request body
    Contraception.findByIdAndUpdate(req.params.contraceptionId, {
        contraception_name: req.body.contraception_name
    }, {new: true})
    .then(contra => {
        if(!contra) {
            return res.status(404).send({
                message: "Contraception not found with id " + req.params.contraceptionId
            });
        }
        res.send(contra);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contraception not found with id " + req.params.contraceptionId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.contraceptionId
        });
    });
};

// Delete a contraception with the specified contraceptionId in the request
exports.delete = (req, res) => {
    Contraception.findByIdAndRemove(req.params.contraceptionId)
    .then(contracep => {
        if(!contracep) {
            return res.status(404).send({
                message: "Contraception not found with id " + req.params.contraceptionId
            });
        }
        res.send({message: "Contraception deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.contraception_name === 'NotFound') {
            return res.status(404).send({
                message: "Contraception not found with id " + req.params.contraceptionId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Contraception with id " + req.params.contraceptionId
        });
    });
};