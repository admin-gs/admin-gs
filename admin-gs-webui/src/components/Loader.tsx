import React, {ReactElement} from 'react';

export interface Props<T, E> {
    extra: E;
    data: T | undefined;
    Component: React.ComponentType<E & { data: T }>;
}

export function Loader<T, E>({data, Component, extra}: Props<T, E>): ReactElement {
    if (data) {
        return <Component {...(extra)} data={data}/>;
    } else {
        return (
            <div className="loader">
                <i className="fas fa-pulse fa-spinner"/>
            </div>
        );
    }
}
