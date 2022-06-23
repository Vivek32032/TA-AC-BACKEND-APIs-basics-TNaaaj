var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Book = require('../models/Book')

/* GET List of All Books */

router.get('/', function(req, res, next) {
    Book.find({}, (err, books) => {
        if (err) return next(err); 
        res.json({ books });
      });
});

//get book by id

router.get('/:id', (req, res, next) => {
    let bookId = req.params.id;
  
    Book.findById(bookId, (err, book) => {
      if (err) return next(err);
      res.json({ book });
    });
  });


//  create a new book

 router.post('/',(req,res,next)=>{

    Book.create(req.body, (err,createdBook)=>{
        if(err) return next(err);
        res.json({ createdBook });
    });
});

// update a book

 router.put('/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findByIdAndUpdate(id,req.body,(err,updatedBook)=>{
        if(err) return next(err);
        res.json({ updatedBook })
    }) })

 // delete a book

router.delete('/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findByIdAndDelete(id,(err,deletedBook)=>{
        if(err) return next(err);
        res.json({ deletedBook });
    }) })
    


module.exports = router;
