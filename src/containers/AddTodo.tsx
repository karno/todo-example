import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../modules';
import AddTodo, { DispatchProps } from '../components/AddTodo';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
    onSubmit: (text: string) => {
        dispatch(actionCreator.todos.addTodo({ text }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);
