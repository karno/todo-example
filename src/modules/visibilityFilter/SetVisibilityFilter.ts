import { Action } from 'redux'
import { EOPNOTSUPP } from 'constants';

export const ID_SHOW_ALL = 'SHOW_ALL';
export const ID_SHOW_COMPLETED = 'SHOW_COMPLETED';
export const ID_SHOW_ACTIVE = 'SHOW_ACTIVE';
export const ID_SET_VIS_FILTER = 'SET_VISIBILITY_FILTER';

type ShowAll = {
    type: typeof ID_SHOW_ALL,
}

type ShowCompleted = {
    type: typeof ID_SHOW_COMPLETED,
}

type ShowActive = {
    type: typeof ID_SHOW_ACTIVE,
}

export type FilterType = ShowAll | ShowCompleted | ShowActive;

export const showAll = (): FilterType => ({
    type: ID_SHOW_ALL,
});

export const showCompleted = (): FilterType => ({
    type: ID_SHOW_COMPLETED,
});

export const showActive = (): FilterType => ({
    type: ID_SHOW_ACTIVE,
});

export type SetVisibilityFilterPayload = {
    filter: FilterType;
};

export interface SetVisibilityFilterAction extends Action {
    type: typeof ID_SET_VIS_FILTER;
    payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload) => ({
    payload,
    type: ID_SET_VIS_FILTER
});
