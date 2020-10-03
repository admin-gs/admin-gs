import {GameSetting} from "./GameSetting";

export interface Game {
    id: string;
    name: string;
    description: string;
    settings: GameSetting[];
}
