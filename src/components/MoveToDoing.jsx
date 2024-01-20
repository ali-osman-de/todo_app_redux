import React from 'react'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { moveTodoDoing } from '../store/todo/todoSlice'

function MoveToDoing({ index }) {
    const dispatch = useDispatch()

    return (
        <Button size='md' color='warning' onClick={() => dispatch(moveTodoDoing(index))} >
            Doing
        </Button>
    )
}

export default MoveToDoing