import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            const { text, where } = action.payload;
            state.push({ text, where });
        },
        moveTodoComplete(state, action) {
            const index = action.payload;

            state[index].where = "complete";
        },
        moveTodoDoing(state, action) {
            const index = action.payload;

            state[index].where = "doing";

        },
        removeTodo(state, action) {
            state.splice(action.payload, 1);
        },
    }
});

export const { addTodo, removeTodo, moveTodoComplete, moveTodoDoing } = todoSlice.actions;
export default todoSlice.reducer;
