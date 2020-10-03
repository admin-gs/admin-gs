import React from 'react';
import {NavLink} from "react-router-dom";

export interface Props {
    name: string;
}

export const Layout: React.FC<Props> = ({children, name}) => (
    <div className={`layout ${name}-page`}>
        <nav>
            <div className="top-menu">
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
