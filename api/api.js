const express = require('express');
const router = express.Router();

/**Toy Car Controller */
const { getToyCars, getToyCarById, addToyCar, updateToyCar, deleteToyCar } = require('../controllers/toycar-controller');

/**
 * 
 * 
 * Add your routes for your API endpoints here. Don't forget to add your  controller!  
 */

router
    .route('/toycars/')
    .get(getToyCars)
    .post(addToyCar)

route
    .route('/toycars/:id')
    .get(getToyCarById)
    .delete(deleteToyCar)
    .put(updateToyCar)

module.exports = router;