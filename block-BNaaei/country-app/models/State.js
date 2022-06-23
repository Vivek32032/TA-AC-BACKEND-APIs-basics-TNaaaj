var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema({
    name: String,
    country: {type: mongoose.Types.ObjectId, ref:'Country'},
    population: Number,
    area: Number,
    neighbouring_states: [{type: mongoose.Types.ObjectId, ref: 'State'}]
})

var State = mongoose.model('State', stateSchema);
module.exports = State;