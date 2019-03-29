module.exports = (app) => {
    const contraceptions = require('../controllers/contraception');

    // Create a new contraception
    app.post('/contraception', contraceptions.create);

    // Retrieve all contraceptions
    app.get('/contraceptions', contraceptions.findAll);

    // Update a Note with contraceptionId
    app.put('/contraception/:contraceptionId', contraceptions.update);

    // Delete a Note with contraceptionId
    app.delete('/contraception/:contraceptionId', contraceptions.delete);
}
