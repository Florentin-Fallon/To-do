import React from "react";
import { completeTask } from "../TaskReducer";
import { useDispatch } from "react-redux";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { Typography } from "@mui/material";

function TaskList({tasks}) {
  const [checked, setChecked] = React.useState({})
  const dispatch = useDispatch()

  const handleCompleted = (taskId) => {
    setChecked(prevChecked => ({
      ...prevChecked,[taskId]: !prevChecked[taskId],
    }))
    dispatch(completeTask(taskId))
    alert("Tâche terminée !")
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h5">Tâches <span className="in-progress">En Cours</span></Typography>
      <Table>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
                <TableCell align='center'>{task.date}</TableCell>
                <TableCell align='center'>{task.timeD}</TableCell>
                <TableCell align='center'>{task.timeF}</TableCell>
                <TableCell align='center'>{task.title}</TableCell>
                <TableCell>
                  <Switch onChange={() => handleCompleted(task.id)} checked={!!checked[task.id]}/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskList;
