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
import Switch from '@mui/material/Switch';

function TaskProgress({ tasks }) {
  const [checked, setChecked] = React.useState({});
  const dispatch = useDispatch();

  const inProgressTask = tasks.filter(task => !task.completed);

  const handleProgress = (taskId) => {
    setChecked(prevChecked => ({
      ...prevChecked,
      [taskId]: !prevChecked[taskId],
    }));
    dispatch(completeTask(taskId));
    alert("tâche terminée !");
  };

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
            <TableRow key={task.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center'>{task.date}</TableCell>
              <TableCell align='center'>{task.time}</TableCell>
              <TableCell align='center'>{task.title}</TableCell>
              <TableCell>
                <Switch
                  onChange={() => handleProgress(task.id)}
                  checked={!!checked[task.id]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskProgress;
