import { Action } from 'redux';

export const ID_ADD_TODO = 'ADD_TODO';

export type AddTodoPayload = {
    text: string;
}

export interface AddTodoAction extends Action {
    type: typeof ID_ADD_TODO;
    payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => ({
    payload,
    type: ID_ADD_TODO
});