'use strict'
const express = require('express');
const app = express();
const router = express.Router();
const route = router.get('/', (req,res,next) =>{
  res.status(201).send({
    title:"Node Jiu-Jitsu API",
    version: "0.0.1"
  });
});
module.exports = router;
