const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Integer,
    required: true 
  },
  validity: {
    type: Date,
    default: Date.now+30,
    required: true
  },
  issuedate: {
    type: Date,
    default: Date.now
  }
});

const Coupon = mongoose.model('coupon', CouponSchema);

module.exports = Coupon;
