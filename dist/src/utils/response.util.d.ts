export declare class ResponseUtil {
    static success(data: any, statusCode?: number, status?: string): {
        status: string;
        statusCode: number;
        data: any;
    };
    static error(message: string, statusCode?: number, status?: string): {
        status: string;
        statusCode: number;
        data: {
            message: string;
        };
    };
}
