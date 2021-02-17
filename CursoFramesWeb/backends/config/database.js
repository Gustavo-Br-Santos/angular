const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
