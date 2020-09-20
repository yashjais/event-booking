const mongoose = require('mongoose')

const setUpDb = () => {
    mongoose.connect('mongodb://localhost:27017/booking', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected to db'))
    .catch(err => console.log(err))
}

module.exports = setUpDb