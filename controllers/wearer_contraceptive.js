const Wearer = require('../models/wearer_contraceptive');

//Create new Wearer
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Wearer content can not be empty"
        });
    }
    // Create a Wearer
    const wearer = new Wearer({
        province: req.body.province,
        contraception: req.body.contraception,
        number_of_users: req.body.number_of_users
    });

    // Save Wearer in the database
    wearer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the Wearer."
        });
    });
};

// Retrieve all Wearers from the database.
exports.findAll = (req, res) => {
    Wearer.find()
    .populate('province', 'province_name')
    .populate('contraception', 'contraception_name')
    .then(wearers => {
        res.send(wearers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Wearers."
        });
    });
};

// Find a single wearer with a wearerId
exports.findOne = (req, res) => {
    Wearer.findById(req.params.wearerId)
    .then(wearere => {
        if(!wearere) {
            return res.status(404).send({
                message: "wearer not found with id " + req.params.wearerId
            });            
        }
        res.send(wearere);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "wearer not found with id " + req.params.wearerId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving wearer with id " + req.params.wearerId
        });
    });
};

// Update a Wearer
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Wearer content can not be empty"
        });
    }

    // Find and update Wearer with the request body
    Wearer.findByIdAndUpdate(req.params.wearerId, {
        province: req.body.province,
        contraception: req.body.contraception,
        number_of_users: req.body.number_of_users
    }, {new: true})
    .then(wearer => {
        if(!wearer) {
            return res.status(404).send({
                message: "Wearer not found with id " + req.params.wearerId
            });
        }
        res.send(wearer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Wearer not found with id " + req.params.wearerId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating Wearer with id " + req.params.wearerId
        });
    });
};

// Delete a Wearer with the specified WearerId in the request
exports.delete = (req, res) => {
    Wearer.findByIdAndRemove(req.params.wearerId)
    .then(wear => {
        if(!wear) {
            return res.status(404).send({
                message: "Wearer not found with id " + req.params.wearerId
            });
        }
        res.send({message: "Wearer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Wearer not found with id " + req.params.wearerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Wearer with id " + req.params.wearerId
        });
    });
};