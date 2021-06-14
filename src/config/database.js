
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ali:Guddu@1234@cluster0.0jdco.mongodb.net/web_api?retryWrites=true&w=majority')
.then(response => console.log(response))
.catch(err =>console.log(err))
