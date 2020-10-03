import React, {Key, ReactElement, useEffect, useState} from 'react';
import {Card} from "./Card";

export interface Props<T> {
    getData: () => Promise<T[]>;
    getKey: (item: T, index: number) => Key;
    CardComponent: (props: T & { index: number }) => ReactElement | null;
}

export function DataCards<T>({getData, getKey, CardComponent, ...grid}: Props<T>) {
    const [items, setItems] = useState<T[]>([]);

    useEffect(() => {
        getData().then(setItems);
    }, [getData]);

    return (
        <div className="datacards">
            {items.map((item, i) => (
                <Card key={getKey(item, i)}>
                    <CardComponent {...item} index={i}/>
                </Card>
            ))}
        </div>
    );
}
