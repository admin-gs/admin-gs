import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ListGameServers} from "./pages/gameservers/ListGameServers";
import {ListNodes} from "./pages/nodes/ListNodes";
import {ListUsers} from "./pages/users/ListUsers";
import {ListSettings} from "./pages/settings/ListSettings";

export const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/servers" component={ListGameServers}/>
            <Route exact path="/nodes" component={ListNodes}/>
            <Route exact path="/users" component={ListUsers}/>
            <Route exact path="/settings" component={ListSettings}/>
            <Redirect to="/servers"/>
        </Switch>
    );
}
