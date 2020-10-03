import {Module} from "@nestjs/common";
import {NodesController} from "./controller";
import {DockerModule} from "../docker";

@Module({
    imports: [DockerModule],
    controllers: [NodesController]
})
export class NodesModule {

}
