import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {EntitySelectField, Form, IntField, TextField} from "../../components/Form";
import {Layout} from "../../components/Layout";
import {Game, GameSetting, Node} from "admin-gs-domain";
import {Card} from "../../components/Card";

const Setting: React.FC<{ setting: GameSetting, value: any }> = ({setting, value}) => {
    switch (setting.type) {
        case "enum":
            break;
        case "text":
            return <TextField
                tooltip={setting.description}
                value={value}
                onChange={value}
                label={setting.name}
                id={"game." + setting}
            />
        case "int":
            return <IntField
                tooltip={setting.description}
                value={value}
                onChange={() => {
                }}
                label={setting.name}
                id={"game." + setting}
            />
        case "port":
            return <IntField
                tooltip={setting.description}
                value={value}
                onChange={() => {
                }}
                label={setting.name}
                id={"game." + setting}
            />
    }
    return null;
}

export const NewGameServer: React.FC = () => {
    const {nodeId} = useParams<{ nodeId: string }>();
    const [games, setGames] = useState<Game[]>([]);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [serverName, setServerName] = useState('');
    const [node, setNode] = useState<Node>();
    const [game, setGame] = useState<Game>();
    const [settings, setSettings] = useState<Record<string, any>>({});

    useEffect(() => {
        fetch('/api/games')
            .then(r => r.json())
            .then(setGames)
    }, []);

    useEffect(() => {
        fetch('/api/nodes')
            .then(r => r.json())
            .then((nodes: Node[]) => {
                setNodes(nodes);
                if (nodeId) {
                    setNode(nodes.find(n => n.id === nodeId))
                }
            })
    }, [nodeId]);

    useEffect(() => {
        if (game && !serverName) {
            setServerName(game.name + ' Server');
        }

        if (game) {
            const newSettings: typeof settings = {};
            game.settings.forEach((s) => newSettings[s.id] = s.default);
            setSettings(newSettings);
        } else {
            setSettings({});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game]);

    return (
        <Layout name="new-game-server">
            <h1>New Server</h1>

            <Form onSubmit={() => {
            }} submitText="Create">

                <Card>
                    <h2>General</h2>

                    <TextField value={serverName}
                               onChange={setServerName}
                               label="Name"
                               id="name"
                    />

                    <EntitySelectField<Node> id="node"
                                             label="Node"
                                             placeholder="Select a node..."
                                             options={nodes}
                                             value={node}
                                             onChange={setNode}
                    />

                    <EntitySelectField<Game> id="game"
                                             label="Game"
                                             placeholder="Select a game..."
                                             options={games}
                                             value={game}
                                             onChange={setGame}
                    />
                </Card>

                {game && (
                    <Card>
                        <h2>{game.name}</h2>
                        {
                            game.settings.map(setting => (
                                <React.Fragment key={setting.id}>
                                    <Setting setting={setting} value={settings[setting.id]}/>
                                </React.Fragment>
                            ))
                        }
                    </Card>
                )}
            </Form>
        </Layout>
    );
};
