import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authController = {

    signUp: async (req, res, next) => {
        try {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)

            let body = { ...req.body }
            body.password = passwordHash

            const newUser = await User.create(body)
            let { _id, name, email, profile_pic, likes } = newUser
            //console.log(process.env.SECRET_KEY)
            const token = jwt.sign( { _id, name }, process.env.SECRET_KEY, { expiresIn:'1h' } )
            return res.status(201).json({
                success: true,
                userData:{ name, email, profile_pic, likes },
                token: token,
                message: 'Sign up successfully'
            })

        } catch (error) {
            console.log(error);
            next(error)
        }
    },

    signIn: async (req, res, next) => {
        try {
            let { email, password } = req.body
            const userExists = await User.findOne({ email })
            if (userExists) {
                const passwordValid = bcrypt.compareSync(password, userExists.password)
                if (passwordValid){
                    let { _id, name, email, profile_pic, likes } = userExists
                    const token = jwt.sign( { _id, name }, process.env.SECRET_KEY, { expiresIn:'1h' } )
                    return res.status(201).json({
                        success: true,
                        userData: { name, email, profile_pic, likes },
                        token: token,
                        message: 'Sign in successfully'
                    })
                }
            }
            return res.status(400).json({
                success: false,
                message: 'User / Password incorrect'
            })
        } catch (error) {
            console.log(error);
            next(error) 
        }
    },

    loginWithToken : (req, res) => {
        try {
            const { name, email, profile_pic, likes } = req.user
            console.log("authorization")
            res.status(200).json({
                success: true,
                userData: {  name, email, profile_pic, likes },
                message: 'Sign in with token successfully',
            })            
        } catch (error) {
            console.log(error);
            next(error)             
        }
    }

}

export default authController;