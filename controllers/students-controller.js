'use strict'
var mongoose = require('mongoose');
const Student = mongoose.model('Student');

exports.get = (req,res,next) =>{
  Student.find({})
  .then(data => {
    res.status(200).send(data)
  }).catch(e => {
    res.status(400).send({
      message: "Erro ao Mostrar"
    });
  });
};

exports.post = (req,res,next) =>{
  var student = new Student(req.body);
  student.save()
  .then(x => {
    res.status(201).send({
      message: "Cadastrado com Sucesso"
    });
  })
  .catch(e => {
    res.status(400).send({
      message: "Json Invalido"
    });
  });
  res.status(200).send(req.body);
};

exports.put = (req,res,next) =>{
  Student
  .findByIdAndUpdate( req.params.id, {
    $set:{
      name: req.body.name,
      belt: req.body.belt
    }
  }).then(x =>{
    res.status(200).send({
      message: "Atualizado com Sucesso"
    })
  }).catch(e =>
      res.status(400).send({
        message: "Erro na Atualização"
      })
    );
  };

  exports.delete = (req,res,next) =>{
    const id = req.params.id;
    Student
    .findOneAndRemove(id)
    .then(x =>{
      res.status(200).send({
        message: "Deletado com Sucesso"
      })
    }).catch(e =>
        res.status(400).send({
          message: "Erro ao Deletar"
        })
      );
  };
