import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Layout} from "../../components";

export const NewGameServer: React.FC = () => {
    const {nodeId} = useParams<{nodeId: string}>();
    const [games, setGames] = useState<any[]>([]);
    const [nodes, setNodes] = useState<any[]>([]);
    const [node, setNode] = useState<string>(nodeId);
    const [game, setGame] = useState<string>();

    useEffect(() => {
        fetch('/api/games')
            .then(r => r.json())
            .then(setGames)
    }, []);

    useEffect(() => {
        fetch('/api/nodes')
            .then(r => r.json())
            .then(setNodes)
    }, []);

    return (
        <Layout name="new-game-server">
            <h1>New Server</h1>

            <label htmlFor="node">Node</label>
            <select id="node" name="node" value={node} onChange={e => setNode(e.target.value)}>
                <option>Select a node...</option>
                {nodes.map(node => (
                    <option value={node.id}>{node.name}</option>
                ))}
            </select>

            <label htmlFor="game">Game</label>
            <select id="game" name="game" value={game} onChange={e => setGame(e.target.value)}>
                <option>Select a game...</option>
                {games.map(game => (
                    <option value={game.id}>{game.name}</option>
                ))}
            </select>
        </Layout>
    );
};
