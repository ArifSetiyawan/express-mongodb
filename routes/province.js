module.exports = (app) => {
    const provinces = require('../controllers/province');

    // Create a new province
    app.post('/province', provinces.create);

    // Retrieve all province
    app.get('/provinces', provinces.findAll);

    // Update a Note with provinceId
    app.put('/province/:provinceId', provinces.update);

    // Delete a Note with provinceId
    app.delete('/province/:provinceId', provinces.delete);
}