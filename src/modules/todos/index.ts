import { ID_ADD_TODO, addTodo, AddTodoAction } from './AddTodo';
import { ID_TOGGLE_TODO, toggleTodo, ToggleTodoAction } from './ToggleTodo';
import { ID_DELETE_COMPLETED_TODO, deleteCompletedTodo, DeleteCompletedTodoAction } from './DeleteCompletedTodo';


type Actions
    = AddTodoAction | ToggleTodoAction | DeleteCompletedTodoAction;

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

export const reducer = (state: State = init(), action: Actions): State => {
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
        case ID_DELETE_COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.filter(e =>
                    !e.completed)
            };
        default:
            return state;
    }
}

export const actionCreator = { addTodo, toggleTodo, deleteCompletedTodo };
