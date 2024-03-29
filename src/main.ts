import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      new ConfigService().getOrThrow('NODE_ENV') === 'development'
        ? ['log', 'debug', 'error', 'verbose', 'warn']
        : ['error', 'warn'],
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Bitcoin Core REST API')
    .setDescription('Bitcoin Core REST API description')
    .setVersion('1.0')
    .addServer(
      `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`,
    )
    .addTag('Blockchain')
    .addTag('Control')
    .addTag('Mining')
    .addTag('Network')
    .addTag('Rawtransactions')
    .addTag('Signer')
    .addTag('Util')
    .addTag('Wallet')
    .addTag('Zmq')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.API_DOCS_PATH, app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
