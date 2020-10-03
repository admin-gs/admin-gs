import React from 'react';
import {NavLink} from "react-router-dom";

export const Layout: React.FC = ({children}) => (
    <div className="layout">
        <nav>
            <div className="top-menu">
                <NavLink to="/servers">
                    <i className="fas fa-gamepad"/> Game Servers
                </NavLink>
                <NavLink to="/nodes">
                    <i className="fas fa-server"/> Nodes
                </NavLink>
                <NavLink to="/users">
                    <i className="fas fa-users"/> Users
                </NavLink>
            </div>
            <div className="bottom-menu">
                <NavLink to="/settings">
                    <i className="fas fa-cog"/> Settings
                </NavLink>
            </div>
        </nav>
        <main>
            {children}
        </main>
    </div>
);
