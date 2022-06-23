var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    name: {type: String, require: true},
    state: {type: mongoose.Types.ObjectId, ref: 'State'},
    continent: String,
    population: Number,
    ethnicity: [String],
    neighbouring_countries: [{type: mongoose.Types.ObjectId, ref: 'Country'}],
    area: Number,
})

let Country = mongoose.model('Country',countrySchema);

module.exports = Country;