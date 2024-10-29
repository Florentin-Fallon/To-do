import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../TaskReducer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import db from '../db';

function AddTask({updateTasks}) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  const dispatch = useDispatch()

  const handleAddTask = async () => {
    if (title){
      const newTask = { date, time, title, completed: false}
      await db.tasks.add(newTask)
        dispatch(addTask(newTask))
        setTitle("")
        setTime("")
        setDate("")
        alert(`Tâche "${title}" ajouter !`)
      }
    }

  return (
    <Box
      component="form"
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <TextField sx={{mr: 2, backgroundColor: 'white'}} color='success' id='outlined-basic' label="Nouvelle tâche" variant='outlined' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField sx={{mr: 2, backgroundColor: 'white'}} color='success' id='outlined-basic' label="Plage horaire" variant='outlined' type='text' value={time} onChange={(e) => setTime(e.target.value)} />
      <TextField sx={{mr: 2, backgroundColor: 'white'}} color='success' id='outlined-basic' variant='outlined' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <Button sx={{backgroundColor: 'green', color: 'white'}} onClick={handleAddTask}>Ajouter la tâche</Button>
    </Box>
  )
}

export default AddTask
