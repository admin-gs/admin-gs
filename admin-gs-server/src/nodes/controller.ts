import {Controller, Get} from "@nestjs/common";
import {Docker} from "node-docker-api";

@Controller("/api/nodes")
export class NodesController {
    public constructor(private readonly docker: Docker) {
    }

    @Get("/")
    public async listNodes(): Promise<any> {
        const nodes = await this.docker.node.list();
        return nodes.map(node => {
            const data = node.data as any;
            return {
                id: node.id,
                role: data?.Spec?.Role,
                name: data?.Description?.Hostname,
                state: data.Status.State,
                address: data.Status.Addr,
                type: 'docker',
                os: data?.Description?.Platform?.OS,
                arch: data?.Description?.Platform?.Architecture
            }
        });
    }
}
