const messageList = {
    400: "Bad Request",
    401: "Unauthorizet",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict"
}


const HttpExeption = (status , message = messageList[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

export default HttpExeption;