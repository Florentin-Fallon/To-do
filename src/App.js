import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskCompleted from "./components/TaskCompleted";
import { fetchTasks, deleteTask, completeTask } from './TaskReducer';
import { Typography } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  
  const tasks = useSelector(state => state.task.filter(task => !task.completed));
  const complete = useSelector(state => state.task.filter(task => task.completed));

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <div>
      <Typography variant='h4' className='title'>To-do List</Typography>
      <AddTask />
      <div className='table'>
        <div>
          <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />
        </div>
        <div className='divider'></div>
        <div>
          <TaskCompleted complete={complete} onDeleteTask={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
