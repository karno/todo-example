import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import Link, { DispatchProps, StateProps } from '../components/Link';
import { actionCreator, RootState } from '../modules';
import FilterLink from './FilterLink';

const mapStateToProps = (state: RootState): StateProps => ({
    enabled: state.todos.todos.some(e => e.completed)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
    onClick: () => {
        dispatch(actionCreator.todos.deleteCompletedTodo({}));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);