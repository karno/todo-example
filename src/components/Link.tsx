import * as React from 'react';

type Props = {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const component: React.FC<Props> = props => (
    <button
        onClick={props.onClick}
        disabled={props.active}
        style={{
            marginLeft: '4px'
        }}
    >
        {props.children}
    </button>
);

export default component;