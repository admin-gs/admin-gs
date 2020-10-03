import {Module, OnModuleInit} from "@nestjs/common";
import {Docker} from "node-docker-api";
import {ModuleRef} from "@nestjs/core";

@Module({
    providers: [{
        provide: Docker,
        useValue: new Docker({socketPath: '/var/run/docker.sock'})
    }],
    exports: [Docker]
})
export class DockerModule implements OnModuleInit {
    constructor(private moduleRef: ModuleRef) {
    }

    async onModuleInit(): Promise<void> {
        const docker = this.moduleRef.get(Docker);
        // get status of swarm. This will crash the application if the docker machine is not a swarm
        await docker.swarm.status();
    }

}
