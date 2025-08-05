const validateBody = async (schema , body) => {
    try {
        await schema.validate(body)
        return true
    } catch (error) {
        error.status = 404
        throw error
    }
}

export default validateBody;