import { ID_ADD_TODO, addTodo, AddTodoAction } from './AddTodo';
import { ID_TOGGLE_TODO, toggleTodo, ToggleTodoAction } from './ToggleTodo';


type Actions
    = AddTodoAction | ToggleTodoAction;

export type State = {
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[];
}

const init = (): State => ({
    todos: []
});

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        case ID_ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            };
        case ID_TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(e =>
                    e.id !== action.payload.id ? e :
                        {
                            ...e,
                            completed: !e.completed
                        }
                )
            };
        default:
            return state;
    }
}

export const actionCreator = { addTodo, toggleTodo };

