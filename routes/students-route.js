'use strict'
const express = require('express');



const app = express();
const router = express.Router();

const studentsController = require('../controllers/students-controller');


router.get('/', studentsController.get);
router.post('/', studentsController.post);
router.put('/:id', studentsController.put);
router.delete('/:id', studentsController.delete);



module.exports = router;
