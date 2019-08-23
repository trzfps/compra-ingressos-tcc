class userController {
    async get(req, res){
        res.status(200).send('Ok');
    }
}
module.exports = new userController;