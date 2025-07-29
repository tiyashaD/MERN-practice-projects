const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const registerController = async( req, res ) => {
    try {
        const { username, email, password } = req.body;
        //validation
        if(!username || !email || !password){
            return res.status(500).send({
                success:false,
                message:'Please Provide All Fields'
            })
        }
        // check existing user with their email
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(500).send({
                success:false,
                message:'user already exist'
            })
        }
        //encrypt password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // save new user
        const newUser = new userModel({ username, email, password:hashedPassword });
        await newUser.save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Register API error',
            error
        })
    }
}

//LOGIN
const loginController = async(req, res) => {
    try {
        const { email, password } = req.body;
        //finding user
        const user = await userModel.findOne({ email })
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User doesnt exist'
            })
        }
        //password verification
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).send({
            success: false,
            message: "Invalid credentials",
          });
        }
        //token
        const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.status(200).send({
          success: true,
          message: "login successfully",
          token,
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
          },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'login api',
            error
        })
    }
}

//export
module.exports = { registerController, loginController } ;