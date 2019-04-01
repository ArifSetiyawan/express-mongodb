module.exports = (app) => {
    const contraceptions = require('../controllers/contraception');

    // Create a new contraception
    app.post('/contraception', contraceptions.create);

    // Retrieve all contraceptions
    app.get('/contraceptions', contraceptions.findAll);

    // Retrieve a single contraception with contraceptionId
    app.get('/contraception/:contraceptionId', contraceptions.findOne);

    // Update a Note with contraceptionId
    app.put('/contraception/update/:contraceptionId', contraceptions.update);

    // Delete a Note with contraceptionId
    app.delete('/contraception/delete/:contraceptionId', contraceptions.delete);
}