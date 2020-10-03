import {Module} from "@nestjs/common";
import {GamesLibrary} from "./GamesLibrary";
import {GamesController} from "./GamesController";


@Module({
    providers: [GamesLibrary],
    controllers: [GamesController],
    exports: [GamesLibrary]
})
export class GamesModule {

}
