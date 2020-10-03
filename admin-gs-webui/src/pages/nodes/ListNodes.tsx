import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {Tag} from "../../components/Tag";
import {Layout} from "../../components/Layout";
import {DataCards} from "../../components/DataCards";

const Card: React.FC<any> = ({id, name, type, address, os, role, state}) => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        fetch(`/api/nodes/${id}/servers`)
            .then(r => r.json())
            .then(setServers)
    }, [id]);
    return (
        <>
            <div className="info">
                <Link to={`/nodes/${id}`}><h2><i className={`fab fa-${type}`}/> <i className={`fab fa-${os}`}/> {name}
                </h2>
                </Link>
                <div className="tags">
                    <Tag color="accent">{role}</Tag>
                    <Tag color={state === "ready" ? "success" : "error"}>
                        {state}
                    </Tag>
                </div>
                <code>{address}</code>
            </div>
            <div className="servers">
                {servers.map(({id, name}) => (
                    <div className="server" key={id}>
                        <h3>{name}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}

export const ListNodes: React.FC = () => {

    return (
        <Layout name="list-nodes">
            <h1>Nodes</h1>
            <DataCards<any>
                getData={() => fetch('/api/nodes').then(r => r.json())}
                getKey={(node) => node.id}
                CardComponent={Card}
            />
        </Layout>
    );
}
