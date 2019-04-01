module.exports = (app) => {
    const wearers = require('../controllers/wearer_contraceptive');

    // Create a new wearer
    app.post('/wearer', wearers.create);

    // Retrieve all wearer
    app.get('/wearers', wearers.findAll);

    // Retrieve a single wearer with wearerId
    app.get('/wearer/:wearerId', wearers.findOne);

    // Update a wearer with wearerId
    app.put('/wearer/update/:wearerId', wearers.update);

    // Delete a wearer with wearerId
    app.delete('/wearer/delete/:wearerId', wearers.delete);
}