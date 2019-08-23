const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ingressos', {
    useNewUrlParser: true,
    useCreateIndex: true
});
module.exports = mongoose;