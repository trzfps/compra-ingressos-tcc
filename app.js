const app = require('./app/config/server');
const port = process.env.PORT  || 5000;
app.listen(port, function(){
    console.log(`Server is listing in port ${port}`);
});