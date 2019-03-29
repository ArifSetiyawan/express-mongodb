const mongoose = require('mongoose');

const ProvinceSchema = mongoose.Schema({
    province_name: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('province', ProvinceSchema);