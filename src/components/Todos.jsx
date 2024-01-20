import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RemoveTodo from "./RemoveTodo";
import { ListGroup, ListGroupItem } from "reactstrap";
import MoveToComplete from "./MoveToComplete";
import MoveToDoing from "./MoveToDoing";

export default function Todos() {
    const todos = useSelector(state => state.todos);
    const notCompletedTodos = todos.filter(item => item.where === 'notCompleted');

    useEffect(() => {

    }, [todos]);

    return (
        <ListGroup className="mb-5 border" flush>
            {notCompletedTodos?.map((item, index) =>
                <ListGroupItem key={index}>
                    <h5 className=" fw-light">{item.text}</h5>
                    <div className='d-flex justify-content-between'>
                        <MoveToDoing index={todos.indexOf(item)} />
                        <MoveToComplete index={todos.indexOf(item)} />
                        <RemoveTodo index={todos.indexOf(item)} />
                    </div>
                </ListGroupItem>
            )}
        </ListGroup>
    );
}
