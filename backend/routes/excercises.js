const express = require('express');
const route = express.Router();

// Import Excercise-Model

let Excercise = require('../models/excercise.model');

route.get('/', (req,res) => {
    Excercise.find()
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).json('Error: ' + err));
});


route.post('/add', (req,res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date
    });

    newExcercise.save()
        .then(() => res.json('Excercise Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


route.get('/:id', (req, res) => {
    Excercise.findById(req.params.id)
        .then(excercise => res.json(excercise))
        .catch(err => res.status(400).json('Error: ' + err))
})

route.delete('/:id', (req,res) => {
    Excercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Excercise Deleted!'))
        .catch(err => res.status(400).json('Error: '+ err))
})

route.post('/update/:id', (req, res) => {
    Excercise.findById(req.params.id)
        .then(excercise => {
            excercise.username = req.body.username;
            excercise.description = req.body.description;
            excercise.duration = Number(req.body.duration);
            excercise.date = Date.parse(req.body.date)

            excercise.save()
                .then(() => res.json('Excercise updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })

        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = route;