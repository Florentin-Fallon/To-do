import React from "react";
import { completeTask } from "../TaskReducer";
import { useDispatch } from "react-redux";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


function TaskList({ tasks}) {

const dispatch = useDispatch()

  const completedTask = (id) => {
    try {
      dispatch(completeTask(id))
      alert("Tâche terminée !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche :", error);
      alert("Erreur lors de la mise à jour de la tâche.");
    }
  };

  return (
    <TableContainer component={Paper}>
      <h3 className='titleList'>Liste des tâches</h3>
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
          {tasks.map((task) => (
            <TableRow key={task.id}>
                <TableCell align='center'>{task.date}</TableCell>
                <TableCell align='center'>{task.time}</TableCell>
                <TableCell align='center'>{task.title}</TableCell>
                <TableCell><Button sx={{backgroundColor: 'green', color: 'white'}} onClick={() => completedTask(task.id)}>Terminer</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskList;
