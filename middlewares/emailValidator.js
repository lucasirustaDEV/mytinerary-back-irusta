import User from "../models/User.js"

const emailValidator = async (req, res, next) => {

    const emailExists = await User.findOne({ email: req.body.email })
    if (!emailExists) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'Email already exists'
    })
}

export default emailValidator