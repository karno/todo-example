import {
    FilterType, showAll,
    setVisibilityFilter, SetVisibilityFilterAction,
    ID_SET_VIS_FILTER
} from './SetVisibilityFilter';

export { showAll, showCompleted, showActive } from './SetVisibilityFilter';

export type FilterType = FilterType;

type Actions = SetVisibilityFilterAction;

export type State = {
    visibility: FilterType,
}

const init = (): State => ({
    visibility: showAll(),
});

export const reducer = (state: State = init(), action: Actions): State => {
    switch (action.type) {
        case ID_SET_VIS_FILTER:
            return {
                visibility: action.payload.filter,
            }
        default:
            return state;
    }
}

export const actionCreator = {
    setVisibilityFilter,
};