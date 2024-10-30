import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../TaskReducer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import db from '../db';

function AddTask() {
  const [title, setTitle] = useState("")
  const [timeD, setTimeD] = useState("")
  const [timeF, setTimeF] = useState("")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const dispatch = useDispatch()

  const handleAddTask = async () => {
    if (title){
      const newTask = { date, timeD, timeF, title, completed: false}
      await db.tasks.add(newTask)
        dispatch(addTask(newTask))
        setTitle("")
        setTimeD("")
        setTimeF("")
        setDate("")
        alert(`Tâche "${title}" ajouter !`)
      }
    }

  return (
    <Box component="form" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <TextField color='success' id="outlined-basic" label="Nouvelle tâche" variant='outlined' type='text' value={title} onChange={(e) => setTitle(e.target.value)}  required/>
      <TextField color='success' id='outlined-basic' variant='outlined' type='time' value={timeD} onChange={(e) => setTimeD(e.target.value)}  required/>
      <TextField color='success' id='outlined-basic' variant='outlined' type='time' value={timeF} onChange={(e) => setTimeF(e.target.value)} />
      <TextField color='success' id='outlined-basic' variant='outlined' type='date' value={date} onChange={(e) => setDate(e.target.value)}  required/>
        <Button variant='contained' color='success' onClick={handleAddTask}>Ajouter la tâche</Button>
    </Box>
  )
}

export default AddTask
