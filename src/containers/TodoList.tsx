import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../modules';
import TodoList, { StateProps, DispatchProps } from '../components/TodoList';
import { ID_SHOW_ALL, ID_SHOW_COMPLETED, ID_SHOW_ACTIVE } from '../modules/visibilityFilter/SetVisibilityFilter';

const mapStateToProps = (state: RootState): StateProps => {
    const filter = () => {
        switch (state.visibilityFilter.visibility.type) {
            case ID_SHOW_ALL:
                return state.todos.todos;
            case ID_SHOW_COMPLETED:
                return state.todos.todos.filter(e => e.completed);
            case ID_SHOW_ACTIVE:
                return state.todos.todos.filter(e => !e.completed);
            default:
                throw new Error(`unknown filter!`);
        }
    };
    return {
        todos: filter()
    }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
    toggleTodo: (id: number) => {
        dispatch(actionCreator.todos.toggleTodo({ id: id }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
