import { ValidationError } from "sequelize";

const errorHandler = (error , req ,res , next) => {
    console.log("Middleware Обработка ошибок");
    // console.log(error.status);
    // console.log(ValidationError);

    if (!error.status) {
        if (error instanceof ValidationError) {
            error.status=404
        }
    }
    const { status = 500 , message} = error
    

    res.status(status).json({
        message,
    })
    
}

export default errorHandler