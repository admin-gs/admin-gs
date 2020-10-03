import {Module} from '@nestjs/common';
import {NodesModule} from "./nodes";

@Module({
    imports: [NodesModule],
})
export class AppModule {
}
