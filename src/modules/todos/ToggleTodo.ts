import { Action } from 'redux';

export const ID_TOGGLE_TODO = 'TOGGLE_TODO';

export type ToggleTodoPayload = {
    id: number;
}

export interface ToggleTodoAction extends Action {
    type: typeof ID_TOGGLE_TODO;
    payload: ToggleTodoPayload;
}

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => ({
    payload,
    type: ID_TOGGLE_TODO
});

