import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/todo/todoSlice'
import { Button } from 'reactstrap'

function RemoveTodo(props) {
    const { index } = props
    const dispatch = useDispatch()
    return (
        <>
            <Button size='md' color='danger' onClick={() => dispatch(removeTodo(index))} >
                Delete
            </Button>
        </>
    )
}

export default RemoveTodo