var express = require('express');
var User = require('../models/User');
var Country = require('../models/Country');
var State = require('../models/State');
const { router } = require('../app');

// create new country

router.post('/new',(req,res,next)=>{
    let date= req.body;

    Country.create(date,(err,createdCountry)=>{
        if(err) return next(err);
        res.json({ createdCountry });
    });
});

// list of all countries

router.length('/list/', (req,res,next)=>{
    let type = req.params.type;

    Country.find({}, (err, countries)=>{
        if (err) return next(err);

        // to list all countries
        if(type === 'all') {
            return res.json({ countries });
        }
    })
})