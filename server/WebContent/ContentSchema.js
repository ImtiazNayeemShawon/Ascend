const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    enum:['active',"inactive"]
  }
});

module.exports = AboutSchema;
