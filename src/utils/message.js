

const StatusCode = {
    success: 200,
};

class Result {

    constructor(statusCode, code, message, data = {}) {
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    /**
     * Serverless: According to the API Gateway specs, the body content must be stringified
     */
    bodyToString() {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                code: this.code,
                message: this.message,
                data: this.data,
            }),
        };
    }
}


class MessageUtil {
    static success(data) {
        const result = new Result(StatusCode.success, 0, 'success', data);

        return result.bodyToString();
    }

    static error(statusCode, code, message) {
        const result = new Result(statusCode, code, message);

        console.log(result.bodyToString());
        return result.bodyToString();
    }
}

module.exports = MessageUtil