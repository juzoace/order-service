"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("node:path");
const dotenv = require("dotenv");
dotenv.config({
    path: path.resolve(process.cwd(), './.env'),
});
const defaultPort = 5400;
exports.default = {
    port: +process.env.PORT || defaultPort,
    env: process.env.ENV,
    baseUrl: process.env.BASE_URL ||
        `http://localhost:${+process.env.PORT || defaultPort}`,
    redis: {
        host: process.env.REDIS_HOST,
        user: process.env.REDIS_USER,
        pass: process.env.REDIS_PASS,
        port: process.env.REDIS_PORT,
    },
    kafka: {
        sasl: {},
        brokers: process.env.KAFKA_BROKERS?.split(','),
    },
};
//# sourceMappingURL=index.js.map