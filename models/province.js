const mongoose = require('mongoose');
const Schema = mongoose.Schema

const provinceSchema = new Schema({
  province_name: {
    type: String
  },
},{
    timestamps: true
})

const Province = mongoose.model('province', provinceSchema)

module.exports = Province;