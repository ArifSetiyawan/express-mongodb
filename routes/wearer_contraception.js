module.exports = (app) => {
    const wearers = require('../controllers/wearer_contraceptive');

    // Create a new wearer
    app.post('/wearer', wearers.create);

    // Retrieve all wearer
    app.get('/wearers', wearers.findAll);

    // Update a wearer with wearerId
    app.put('/wearer/:wearerId', wearers.update);

    // Delete a wearer with wearerId
    app.delete('/wearer/:wearerId', wearers.delete);
}