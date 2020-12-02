const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://srini:Srini123@cluster0.bcfor.mongodb.net/Chit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})