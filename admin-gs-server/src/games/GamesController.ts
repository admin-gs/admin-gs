import {Controller, Get} from "@nestjs/common";
import {Game} from "admin-gs-domain";
import {GamesLibrary} from "./GamesLibrary";

@Controller("/api/games")
export class GamesController {
    constructor(private readonly library: GamesLibrary) {
    }

    @Get("/")
    public listSupportedGames(): Game[] {
        return Object.values(this.library.games);
    }
}
