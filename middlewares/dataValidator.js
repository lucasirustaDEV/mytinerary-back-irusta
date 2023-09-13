const dataValidator = (schema) => (req, res, next) => {

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        console.log(validation)
        //return res.json(validation.error)
        return res.status(400).json({
            success: false,
            message: validation.error.details 
        })
    }
    return next()

}

export default dataValidator