import React, { useContext } from 'react';

import {
  Segment,
  Message,
  Item,
  Button,
} from 'semantic-ui-react';

import TodoListContext from './TodoListContext';

function Task(task) {
  const style = {
    textDecoration: task.done ? 'line-through' : 'none',
  };

  const { dispatch } = useContext(TodoListContext);

  const handleDeleteTask = () => {
    dispatch({ payload: task.id, type: 'DELETE_TASK' });
  };

  const handleDone = () => {
    dispatch({ payload: task.id, type: 'TOGGLE_TASK_DONE' });
  };

  return (
    <Segment size="massive">
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as="a" style={style} onClick={handleDone}>{task.title}</Item.Header>
          </Item.Content>
          <Button circular icon="close" onClick={handleDeleteTask} />
        </Item>
      </Item.Group>
    </Segment>
  );
}

function AddTask() {
  const { tasks } = useContext(TodoListContext);
  if (0 === tasks.length) {
    return <Message>No tasks yet</Message>;
  }
  const taskList = tasks.map(task => (<Task key={task.id} {...task} />));

  return (
    <Segment.Group>
      {
        taskList
      }
    </Segment.Group>
  );
}

export default AddTask;
