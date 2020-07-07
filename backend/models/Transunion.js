const mongoose = require("mongoose");
const TransunionSchema = new mongoose.Schema({
  cr_number: {
    type: String,
    required: true
  },
  creditor_name: {
    type: String,
    required: true,
  },
  generated_date: {
    type: Date,
    default: Date.now
  },
  inquiries:[{
    inquiry_date: Date,
    inquiry_company: String,
    required: true
  }]
});

module.exports = Transunion = mongoose.model("TransunionTemplate", TransunionSchema);
