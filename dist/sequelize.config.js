"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv = require("dotenv");
const path = require("path");
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });
const config = {
    use_env_variable: process.env.DB_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: 'mysql',
    models: [__dirname + '/models'],
};
let sequelize;
if (config.use_env_variable) {
    exports.sequelize = sequelize = new sequelize_typescript_1.Sequelize(config.use_env_variable, {
        dialect: config.dialect,
        models: config.models,
    });
}
else {
    exports.sequelize = sequelize = new sequelize_typescript_1.Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        models: config.models,
    });
}
//# sourceMappingURL=sequelize.config.js.map