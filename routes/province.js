module.exports = (app) => {
    const provinces = require('../controllers/province');

    // Create a new province
    app.post('/province', provinces.create);

    // Retrieve all province
    app.get('/provinces', provinces.findAll);

    // Retrieve a single province with provinceId
    app.get('/province/:provinceId', provinces.findOne);

    // Update a province with provinceId
    app.put('/province/update/:provinceId', provinces.update);

    // Delete a province with provinceId
    app.delete('/province/delete/:provinceId', provinces.delete);
}