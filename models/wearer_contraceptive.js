const mongoose = require('mongoose');

const WearerSchema = mongoose.Schema({
    province: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'province'
    }],
    contraception: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'contraception'
    }],
    number_of_users: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('contraceptive_wearers', WearerSchema);