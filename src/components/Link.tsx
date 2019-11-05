import * as React from 'react';

export type StateProps = {
    enabled: boolean;
}

export type DispatchProps = {
    onClick: () => void;
}

type Props = StateProps & DispatchProps & { children: React.ReactNode };

const component: React.FC<Props> = props => (
    <button
        onClick={props.onClick}
        disabled={!props.enabled}
        style={{
            marginLeft: '4px'
        }}
    >
        {props.children}
    </button>
);

export default component;