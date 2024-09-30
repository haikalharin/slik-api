"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUtil = void 0;
class ResponseUtil {
    static success(data, statusCode = 200, status = 'SUCCESS') {
        return {
            status,
            statusCode,
            data,
        };
    }
    static error(message, statusCode = 400, status = 'Failed') {
        return {
            status,
            statusCode,
            data: {
                message,
            },
        };
    }
}
exports.ResponseUtil = ResponseUtil;
//# sourceMappingURL=response.util.js.map