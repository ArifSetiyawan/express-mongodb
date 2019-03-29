const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contraceptionSchema = new Schema({
  contraception_name: {
    type: String
  },
},{
    timestamps: true
})

const Contraception = mongoose.model('contraception', contraceptionSchema)

module.exports = Contraception;