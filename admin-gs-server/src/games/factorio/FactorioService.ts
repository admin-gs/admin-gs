import {Game, GameSetting} from "admin-gs-domain";
import {Injectable, OnModuleInit} from "@nestjs/common";
import {GamesLibrary} from "../GamesLibrary";

export class Factorio implements Game {
    id = 'factorio';
    name = 'Factorio';
    description = 'Factorio is a game in which you build and maintain factories. You will be mining resources, researching technologies, building infrastructure, automating production and fighting enemies. Use your imagination to design your factory, combine simple elements into ingenious structures, apply management skills to keep it working, and protect it from the creatures who don\'t really like you';
    settings: GameSetting[] = [
        {
            id: 'port',
            name: 'Server Port',
            description: 'This port is the primary port of the server.',
            type: 'port',
            default: 34197,
        },
        {
            id: 'playerCount',
            name: 'Maximum Player Count',
            description: 'The maximum number of concurrent players on this server.',
            type: 'int',
            default: 15,
        }
    ];
}

@Injectable()
export class FactorioService implements OnModuleInit {
    public constructor(private readonly library: GamesLibrary) {
    }

    onModuleInit(): void {
        this.library.register(new Factorio());
    }
}
