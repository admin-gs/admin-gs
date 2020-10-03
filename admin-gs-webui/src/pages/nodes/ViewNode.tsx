import React, {useEffect, useState} from 'react'
import {Layout} from "src/components/Layout";
import {Link, useParams} from 'react-router-dom';
import {Loader} from "../../components/Loader";

const ServerList: React.FC<{ data: any[], node: any }> = ({data, node}) => (
    <div className="servers">
        <Link to={`/nodes/${node.id}/servers/new`}>Add Server</Link>
        {data.length === 0 && (
            <div>
                There are no servers my man!
            </div>
        )}
    </div>
);

const Page: React.FC<{ data: { name: string, id: string } }> = ({data: node}) => {
    const [servers, setServers] = useState<any[]>();
    const nodeId = node.id;

    useEffect(() => {
        fetch(`/api/nodes/${nodeId}/servers`)
            .then(r => r.json())
            .then(setServers)
    }, [nodeId]);

    return (
        <>
            <h1>Node: {node.name}</h1>

            <h2>Servers</h2>
            <Loader data={servers} extra={{node}} Component={ServerList}/>
        </>
    );
};

export const ViewNode: React.FC = () => {
    const {nodeId} = useParams<{ nodeId: string }>();
    const [node, setNode] = useState();

    useEffect(() => {
        fetch(`/api/nodes/${nodeId}`)
            .then(r => r.json())
            .then(setNode);
    }, [nodeId]);

    return (
        <Layout name="view-node">
            <Loader data={node} extra={{}} Component={Page}/>
        </Layout>
    );
}
