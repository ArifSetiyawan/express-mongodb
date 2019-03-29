const Province = require('../models/province');

//Create new Province
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Province content can not be empty"
        });
    }
    // Create a Province
    const province = new Province({
        province_name: req.body.province_name
    });

    // Save Province in the database
    province.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the Province."
        });
    });
};

// Retrieve all Provinces from the database.
exports.findAll = (req, res) => {
    Province.find()
    .then(provinces => {
        res.send(provinces);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Provinces."
        });
    });
};

// Update a Province
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Province content can not be empty"
        });
    }

    // Find and update Province with the request body
    Province.findByIdAndUpdate(req.params.provinceId, {
        province_name: req.body.province_name
    }, {new: true})
    .then(province => {
        if(!province) {
            return res.status(404).send({
                message: "Province not found with id " + req.params.provinceId
            });
        }
        res.send(Province);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Province not found with id " + req.params.provinceId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating province with id " + req.params.provinceId
        });
    });
};

// Delete a Province with the specified ProvinceId in the request
exports.delete = (req, res) => {
    Province.findByIdAndRemove(req.params.provinceId)
    .then(province => {
        if(!province) {
            return res.status(404).send({
                message: "Province not found with id " + req.params.provinceId
            });
        }
        res.send({message: "Province deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Province not found with id " + req.params.provinceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Province with id " + req.params.provinceId
        });
    });
};