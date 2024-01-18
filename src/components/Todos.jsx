import { useSelector } from "react-redux"
import RemoveTodo from "./RemoveTodo"
import { ListGroup, ListGroupItem } from "reactstrap"


export default function Todos() {
    const todos = useSelector(state => state.todos)


    return (

        <ListGroup className="mb-5" flush>
            {todos?.map((item, index) =>
                <ListGroupItem className="d-flex justify-content-between align-items-center" key={index}>
                    <h5 className=" fw-light">{item}</h5><RemoveTodo index={index} />
                </ListGroupItem>
            )
            }
        </ListGroup >
    )
}