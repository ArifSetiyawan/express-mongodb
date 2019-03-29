const mongoose = require('mongoose');

const WearerSchema = mongoose.Schema({
    province: [{
        type: Schema.Types.ObjectId,
        ref : 'province'
    }],
    contraception: [{
        type: Schema.Types.ObjectId,
        ref : 'contraception'
    }],
    number_of_users: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('contraceptive_wearers', WearerSchema);