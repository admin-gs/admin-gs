import {Module} from '@nestjs/common';
import {NodesModule} from "./nodes/NodesModule";
import {FactorioModule} from "./games/factorio/FactorioModule";
import {GamesModule} from "./games/GamesModule";

@Module({
    imports: [NodesModule, FactorioModule, GamesModule],
})
export class AppModule {
}
