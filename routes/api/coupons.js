const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const config = require('config');

let Coupon = require('../../models/Coupon');


router.post(
  '/',
  [
    check('value', 'Please enter valid amount').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      //create a Coupon
      const newCoupon = new Coupon({
        value: req.body.value,
      });

      //save the Coupon
      await newCoupon.save();

    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

router.delete('/', async (req, res) => {
  try {
    await Coupon.findByIdAndRemove({ _id: req.body.id });
    res.json({ msg: 'Coupon deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
