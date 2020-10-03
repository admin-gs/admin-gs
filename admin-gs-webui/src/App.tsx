import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ListNodes} from "./pages/nodes/ListNodes";
import {ListUsers} from "./pages/users/ListUsers";
import {ListSettings} from "./pages/settings/ListSettings";
import {ViewNode} from "./pages/nodes/ViewNode";
import {NewGameServer} from "./pages/gameservers/NewGameServer";

export const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/nodes" component={ListNodes}/>
            <Route exact path="/nodes/:nodeId" component={ViewNode}/>
            <Route exact path="/nodes/:nodeId/servers/new" component={NewGameServer}/>
            <Route exact path="/users" component={ListUsers}/>
            <Route exact path="/settings" component={ListSettings}/>
            <Redirect to="/nodes"/>
        </Switch>
    );
}
