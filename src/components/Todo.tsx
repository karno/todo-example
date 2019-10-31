import * as React from 'react';

type Props = {
    text: string;
    completed: boolean;
    onClick: () => void;
}

const component: React.FC<Props> = props => (
    <li
        onClick={e => props.onClick()}
        style={{ textDecoration: props.completed ? 'line-through' : 'none', }}
    >
        {props.text}
    </li>
);

export default component;