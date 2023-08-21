"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const config_1 = require("./common/config");
const utils_1 = require("./common/utils");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: true });
    app.enableShutdownHooks();
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            consumer: {
                groupId: utils_1.KFK_GROUPS.ORDER_GROUP,
                allowAutoTopicCreation: true,
            },
            subscribe: { fromBeginning: true },
            client: {
                brokers: config_1.default.kafka.brokers,
                clientId: utils_1.KFK_CLIENTS.ORDER_CLIENT,
            }
        }
    });
    const swagConfig = new swagger_1.DocumentBuilder()
        .setTitle('Order service Api')
        .setDescription('API Documentation for Order service')
        .setVersion('1.0')
        .build();
    app.setGlobalPrefix('api', {
        exclude: [
            { path: '', method: common_1.RequestMethod.ALL },
            { path: 'health', method: common_1.RequestMethod.ALL },
        ],
    });
    swagger_1.SwaggerModule.setup('/docs', app, swagger_1.SwaggerModule.createDocument(app, swagConfig));
    await app.listen(process.env.PORT);
    app.startAllMicroservices();
}
bootstrap().then(() => {
    common_1.Logger.log(`
      ------------
      Server Application Started!
      API V1: ${config_1.default.baseUrl}/
      API Docs: ${config_1.default.baseUrl}/docs
      Microservice Started Successfully
      ------------
`);
});
//# sourceMappingURL=main.js.map