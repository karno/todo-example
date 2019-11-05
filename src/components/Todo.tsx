import * as React from 'react';

export type StateProps = {
    text: string;
    completed: boolean;
}

export type DispatchProps = {
    onClick: () => void;
}

type Props = StateProps & DispatchProps;

const component: React.FC<Props> = props => (
    <li
        onClick={e => props.onClick()}
        style={{ textDecoration: props.completed ? 'line-through' : 'none', }}
    >
        {props.text}
    </li>
);

export default component;