let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String,  required: true},
    email: String,
    password: String,
    books: {type: mongoose.Types.ObjectId, ref: 'Book'},
    comments: {type: mongoose.Types.ObjectId, ref: 'Comment'},
});

let User = mongoose.model('User',userSchema);
module.exports = User;