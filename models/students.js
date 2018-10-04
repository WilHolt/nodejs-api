'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username:String,
  password:String,
  name:String,
  nickname:String,
  belt:String
});

module.exports = mongoose.model('Student', schema);
