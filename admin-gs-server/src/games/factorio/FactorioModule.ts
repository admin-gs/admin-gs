import {Module} from "@nestjs/common";
import {GamesModule} from "../GamesModule";
import {FactorioService} from "./FactorioService";

@Module({
    imports: [GamesModule],
    providers: [FactorioService]
})
export class FactorioModule {
}
