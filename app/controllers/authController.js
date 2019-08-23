const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
 class authController{
     async Register(req, res){
         const { email }  = req.body;
         try {
             if(await User.findOne({ email }))
                 return res.status(400).send({error: 'User already exists'});

             const user = await User.create(req.body);
             user.password = undefined;
             return res.status(200).send({user});
         }catch(err) {
             return res.status(400).send({error: 'Registration failed'});
         }
     }
    async Authenticate(req, res){
        const {email , password} = req.body;
        const user = await  User.findOne({ email }).select('+password');

        if(!user)
            return res.status(400).send({error: 'User not found'});


        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Invalided password'});
        user.password = undefined;
        res.send({user});
    }
 }

module.exports = new authController;


