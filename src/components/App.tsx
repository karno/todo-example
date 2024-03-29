import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/TodoList';
import Footer from './Footer'


const component: React.FC = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default component;