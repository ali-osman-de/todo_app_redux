import { useDispatch } from "react-redux"
import { addTodo } from "../store/todo/todoSlice"
import { Input, Button, Form } from "reactstrap"
import { useState } from "react"

export default function AddTodo() {
    const [valid, setValid] = useState(false)
    const [invalid, setInvalid] = useState(null)
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        const inputValue = event.target.elements[0].value
        const isValid = inputValue.trim() !== "";
        if (isValid) {
            setInvalid(false)
            setValid(true);
            dispatch(addTodo({ text: inputValue, where: "notCompleted" }));
            event.target.reset();

        } else {
            setInvalid(true)
            setValid(false);
        }

    }


    return (
        <>
            <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
                <Input valid={valid} invalid={invalid} type="text" placeholder="You can add new todo" />
                <Button className="m-3" color="success" type="submit">Add</Button>
            </Form>
        </>
    )
}