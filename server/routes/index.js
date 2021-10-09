const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const {
  getCars,
  changeCar,
  deleteCar,
  postCar,
  getCarsByID,
  getCarsByName,
} = require('../functions/carsFunction.js');

router.get('/hello', (req, res) => res.send('Hello'));

router.get(
  '/cars',
  asyncHandler(async (req, res) => {
    if (req.query.firstName && req.query.lastName) {
      const result = await getCarsByName(req.query);
      res.status(200).json(result);
    } else {
      const result = await getCars();
      res.status(200).json(result);
    }
  }),
);

router.get(
  '/car/:id',
  asyncHandler(async (req, res) => {
    const result = await getCarsByID(req.params.id);
    res.status(200).json(result);
  }),
);

router.patch(
  '/car/:id',
  asyncHandler(async (req, res) => {
    const result = await changeCar(req.params.id, req.body.status);
    res.status(200).json(result);
  }),
);

router.delete(
  '/car/:id',
  asyncHandler(async (req, res) => {
    const result = await deleteCar(req.params.id);
    res.status(200).json(result);
  }),
);

router.post(
  '/car',
  asyncHandler(async (req, res) => {
    const result = await postCar(req.body);
    res.status(200).json(result);
  }),
);

module.exports = router;
