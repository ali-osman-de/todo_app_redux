import React from 'react'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { moveTodoComplete } from '../store/todo/todoSlice'

function MoveToComplete({ index }) {
    const dispatch = useDispatch()

    return (
        <Button size='md' color='dark' onClick={() => dispatch(moveTodoComplete(index))} >
            Complete
        </Button>
    )
}

export default MoveToComplete