import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min: 4,
    max: 10,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
};

const signUpSchema = joi.object({

    name: joi.string().min(3).max(15).required().messages({
        "string.min": "Name should be at least 3 characters long",
        "string.max": "Name should not be longer than 10 characters"
    }),
    surname: joi.string().min(3).max(15).required().messages({
        "string.min": "Name should be at least 3 characters long",
        "string.max": "Name should not be longer than 10 characters"
    }),
    profile_pic: joi.string().uri(),
    email: joi.string().email().required().messages({
        "string.empty": "Email is not allowed to be empty",
        "any.required": "Email is not allowed to be empty",
        "string.email": "Email must be contain @ & .com"
    }),
    password: joiPwd(complexityOptions).messages({
        "string.empty": "Password is not allowed to be empty",
        "passwordComplexity.tooShort": "Password should be at least 4 characters long",
        "passwordComplexity.tooLong": "Password should not be longer than 10 characters",
        "passwordComplexity.lowercase": "Password must include at least three of the following elements: an uppercase letter, a lowercase letter, a number, and a symbol.",
        "passwordComplexity.uppercase": "Password must include at least three of the following elements: an uppercase letter, a lowercase letter, a number, and a symbol.",
        "passwordComplexity.symbol": "Password must include at least three of the following elements: an uppercase letter, a lowercase letter, a number, and a symbol.",
        "passwordComplexity.requirementCount": "Password must include at least three of the following elements: an uppercase letter, a lowercase letter, a number, and a symbol."
    }),
    country: joi.string().required(),
    birth_date: joi.date().max(new Date().setFullYear(new Date().getFullYear() - 18)).messages({
        "date.max": "Sorry, you cannot register if you are under 18 years of age."
    }),
    rol: joi.array().items(joi.string())

})

export default signUpSchema