import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "./db";


export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
    const allTasks = await db.tasks.toArray()
    return allTasks
})

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const id = action.payload
            db.tasks.delete(id)
            return state.filter(task => task.id !== id)
        },
        completeTask: (state, action) => {
            const taskId = action.payload
            const task = state.find(task => task.id === taskId)
            if (task){
                task.completed = true;
                db.tasks.update(taskId, {completed: true})
            }
        },
        updateTask: (state, action) => {
            const { id, updates } = action.payload
            const task = state.find(task => task.id === id)
            if (task) {
                Object.assign(task, updates)
                db.tasks.update(id, updates)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload
        })
    }
})


export const { addTask, deleteTask, completeTask, updateTask} = taskSlice.actions
export default taskSlice.reducer;