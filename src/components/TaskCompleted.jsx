import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../TaskReducer";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function TaskCompleted() {
  const dispatch = useDispatch();
  const completedTasks = useSelector((state) => state.task.filter(task => task.completed));
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    alert(`Tâche supprimée !`);
  };
 
  return (
      <TableContainer component={Paper} sx={{ mb: 10 }}>
        <Typography variant="h5">Tâches <span className="completed">Terminées</span></Typography>
        <Table>
          <TableBody>
            {completedTasks.map((task) => (
              <TableRow key={task.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center'>{task.date}</TableCell>
                <TableCell align='center'>{task.timeD}</TableCell>
                <TableCell align='center'>{task.timeF}</TableCell>
                <TableCell align='center'>{task.title}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" className="buttonDelete" onClick={() => handleDelete(task.id)}>
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TaskCompleted;
