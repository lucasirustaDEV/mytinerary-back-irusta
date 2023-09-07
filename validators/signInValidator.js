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

const signInSchema = joi.object({
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
    })
})

export default signInSchema