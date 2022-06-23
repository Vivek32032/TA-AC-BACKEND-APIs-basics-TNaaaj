let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: String,
    description: String,
    CreatedBy: {type : mongoose.Types.ObjectId, ref: 'User'},
    comments: {type : mongoose.Types.ObjectId, ref: 'Comment'},
    categories : [ String ],
    tags: [String],
    author: String,
});

let Book = mongoose.model('Book',bookSchema);

module.exports = Book;