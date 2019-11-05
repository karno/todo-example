import * as React from 'react';
import Todo from './Todo';

export type StateProps = {
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
}

export type DispatchProps = {
    toggleTodo: (id: number) => void;
}

type Props = StateProps & DispatchProps;

const component: React.FC<Props> = props => (
    <ul>
        {props.todos.map(todo => (
            <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => { props.toggleTodo(todo.id) }}
            />
        ))}
    </ul>
);

export default component;