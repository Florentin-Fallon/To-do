import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../TaskReducer";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
        <h3 className='titleList'>Tâches <span className="completed">Terminées</span></h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Heure</TableCell>
              <TableCell align='center'>Élément</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedTasks.map((task) => (
              <TableRow key={task.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center'>{task.date}</TableCell>
                <TableCell align='center'>{task.time}</TableCell>
                <TableCell align='center'>{task.title}</TableCell>
                <TableCell>
                  <Button sx={{ backgroundColor: 'red', color: 'white' }} className="buttonDelete" onClick={() => handleDelete(task.id)}>
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
