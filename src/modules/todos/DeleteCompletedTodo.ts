import { Action } from "redux";

export const ID_DELETE_COMPLETED_TODO = 'DELETE_COMPLETED_TODO';

export type DeleteCompletedTodoPayload = {
}

export interface DeleteCompletedTodoAction extends Action {
    type: typeof ID_DELETE_COMPLETED_TODO;
    payload: DeleteCompletedTodoPayload;
}

export const deleteCompletedTodo = (payload: DeleteCompletedTodoPayload): DeleteCompletedTodoAction => ({
    payload,
    type: ID_DELETE_COMPLETED_TODO
})