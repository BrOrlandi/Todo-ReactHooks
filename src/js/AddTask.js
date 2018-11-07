import React, { useState, useContext } from 'react';

import {
  Input,
  Button,
} from 'semantic-ui-react';

import TodoListContext from './TodoListContext';

function AddTask() {
  const [newTask, setNewTask] = useState('');
  const { dispatch } = useContext(TodoListContext);

  const submitNewTask = (e) => {
    e.preventDefault();
    dispatch({ payload: newTask, type: 'NEW_TASK' });
    setNewTask('');
  };

  const handleTaskTitleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={submitNewTask} className="add-form">
      <Input placeholder="New task" autoFocus value={newTask} onChange={handleTaskTitleChange} />
      <Button type="submit" className="add-button" primary size="massive">+</Button>
    </form>
  );
}

export default AddTask;
