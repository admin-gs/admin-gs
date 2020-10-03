import {Module} from "@nestjs/common";
import {NodesController} from "./NodesController";
import {DockerModule} from "../docker/DockerModule";
import {GamesModule} from "../games/GamesModule";

@Module({
    imports: [DockerModule, GamesModule],
    controllers: [NodesController]
})
export class NodesModule {

}
