import {Injectable} from "@nestjs/common";
import {Game} from "./Game";

@Injectable()
export class GamesLibrary {
    private readonly _games: Record<string, Game> = {};

    register(game: Game) {
        this._games[game.id] = game;
    }

    public get games() {
        return {...this._games};
    }
}
