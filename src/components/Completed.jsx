import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import RemoveTodo from './RemoveTodo';

function Completed() {
    const todos = useSelector(state => state.todos);
    const completedTodos = todos.filter(item => item.where === 'complete');

    return (
        <>
            <ListGroup className="mb-5 border" flush>
                {completedTodos.map((item, index) => (
                    <ListGroupItem className="d-flex justify-content-between align-items-center" key={index}>
                        <h5 className="fw-light">{item.text}</h5>
                        <RemoveTodo index={todos.indexOf(item)} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    );
}

export default Completed;
