import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask } from '../TaskReducer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function TaskProgress({ tasks}) {

const dispatch = useDispatch()

const inProgressTask = tasks.filter(task => !task.completed)

const handleProgress = (id) => {
  dispatch(completeTask(id))
  alert("tâche terminée !")
}

  return (
    <TableContainer component={Paper}>
      <h3 className='titleList'>Tâches <span className="in-progress">En Cours</span></h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Date</TableCell>
            <TableCell align='center'>Heure</TableCell>
            <TableCell align='center'>Element</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inProgressTask.map((task) => (
            <TableRow key={task.id} sx={{'&:last-child td, &:last-child th': {border: 0} }}>
              <TableCell align='center'>{task.date}</TableCell>
              <TableCell align='center'>{task.time}</TableCell>
              <TableCell align='center'>{task.title}</TableCell>
              <TableCell><Button sx={{backgroundColor: 'green', color: 'white'}} onClick={() => handleProgress(task.id)}>Terminer</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskProgress;
