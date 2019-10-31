import * as React from 'react';
import Todo from './Todo';

type Props = {
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
    toggleTodo: (id: number) => void;
}

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