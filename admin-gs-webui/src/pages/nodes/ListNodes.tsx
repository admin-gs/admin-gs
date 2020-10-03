import React from 'react'
import {Link} from 'react-router-dom';
import {DataCards, Layout, Tag} from "../../components";

const Card: React.FC<any> = ({id, name, type, address, os, role, state}) => (
    <>
        <div className="info">
            <Link to={`/nodes/${id}`}><h2><i className={`fab fa-${type}`}/> <i className={`fab fa-${os}`}/> {name}</h2>
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
            TODO: Server Badges
        </div>
    </>
);


export const ListNodes: React.FC = () => {

    return (
        <Layout name="list-nodes">
            <h1>Nodes</h1>
            <DataCards<any>
                getData={() => fetch('/api/nodes').then(r => r.json())}
                getKey={(node, index) => node.id}
                CardComponent={Card}
            />
        </Layout>
    );
}
