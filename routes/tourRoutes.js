const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkId); //1 

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .post(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;


const getValue = (data, path) => {
  let value;
  if (data && path) {
    const keys = path.split('.');
    let tmp = data;
    keys.forEach((key, i) => {
      if (typeof tmp === 'object' && key in tmp) {
        tmp = tmp[key];
        if (i === keys.length - 1) {
          value = tmp;
        }
      } else {
        tmp = {};
      }
    });
  }
  return value;
};