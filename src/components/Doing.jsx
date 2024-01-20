import React from 'react'
import MoveToComplete from './MoveToComplete';
import { useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'reactstrap';
import RemoveTodo from './RemoveTodo';

function Doing({ index }) {
    const todos = useSelector(state => state.todos);
    const doingTodos = todos.filter(item => item.where === 'doing');

    return (
            <ListGroup className="mb-5 border" flush>
                {doingTodos.map((item, index) => (
                    <ListGroupItem key={index}>
                        <h5 className="fw-light">{item.text}</h5>
                        <div className='d-flex justify-content-between'>
                            <MoveToComplete index={todos.indexOf(item)} />
                            <RemoveTodo />
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
    )
}

export default Doing