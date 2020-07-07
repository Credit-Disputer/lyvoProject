const mongoose = require("mongoose");
const ExperianSchema = new mongoose.Schema({
  cr_number: {
    type: String,
    required: true
  },
  creditor_name: {
    type: String,
    required: true
  },
  generated_date: {
    type: Date,
    required: true
  },
  inquiries:[{
    inquiry_date: Date,
    inquiry_company: String
    // required: true
  }]
});

module.exports = Experian = mongoose.model("ExperianTemplate", ExperianSchema);
