import {NestFactory} from '@nestjs/core';
import {AppModule} from './AppModule';

async function bootstrap() {
    const port = parseInt(process.env.PORT || '8080')
    const app = await NestFactory.create(AppModule);
    app.enableShutdownHooks();
    await app.listen(port);
}

bootstrap()
    .catch(e => {
        console.error(e);
        process.exit(1);
    });
