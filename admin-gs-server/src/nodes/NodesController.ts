import {Controller, Get, Param} from "@nestjs/common";
import {Docker} from "node-docker-api";

function mapNode(node: any): any {
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
}

@Controller("/api/nodes")
export class NodesController {
    public constructor(private readonly docker: Docker) {
    }

    @Get("/")
    public async listNodes(): Promise<any> {
        const nodes = await this.docker.node.list();
        return nodes.map(mapNode);
    }

    @Get("/:nodeId")
    public async getNode(@Param("nodeId") nodeId: string): Promise<any> {
        const node = await this.docker.node.get(nodeId).status();
        return mapNode(node);
    }

    @Get("/:nodeId/servers")
    public async listServers(@Param("nodeId") nodeId: string): Promise<any> {
        const tasks = await this.docker.task.list({filters: {node: [nodeId]}});

        return tasks.map(({data}: { data: any }) => {
            const labels = data.Spec.ContainerSpec.Labels || {};
            return {
                id: data.ID,
                name: labels['admings.name'] || 'Unnamed',
                state: data.Status.State,
                image: {
                    name: /(^[^:]+):/.exec(data.Spec.ContainerSpec.Image)?.[1],
                    version: /:([^@]+)@/.exec(data.Spec.ContainerSpec.Image)?.[1],
                    spec: data.Spec.ContainerSpec.Image,
                },
                labels,
                data
            };
        });
    }
}
