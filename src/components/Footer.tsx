import * as React from 'react';
import FilterLink from '../containers/FilterLink';
import { showAll, showCompleted, showActive } from '../modules/visibilityFilter';
import DeleteCompletedTodoLink from '../containers/DeleteCompletedTodoLink';

const component: React.FC = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={showAll()}>
            All
            </FilterLink>
        <FilterLink filter={showActive()}>
            Active
            </FilterLink>
        <FilterLink filter={showCompleted()}>
            Completed
            </FilterLink>
        <DeleteCompletedTodoLink>
            Delete Completed
        </DeleteCompletedTodoLink>
    </div>
);

export default component;