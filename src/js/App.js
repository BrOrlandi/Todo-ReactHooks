import React, { useReducer } from 'react';

import {
  Header,
  Segment,
  Container,
  Divider,
} from 'semantic-ui-react';

import AddTask from './AddTask';
import TaskList from './TaskList';
import TodoListContext from './TodoListContext';

const TodoReducer = (tasks, action) => {
  switch (action.type) {
    case 'NEW_TASK':
      return tasks.concat({
        id: tasks.length,
        title: action.payload,
        done: false,
      });
    case 'TOGGLE_TASK_DONE':
      return tasks.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }

        return {
          ...task,
          done: !task.done,
        };
      });
    case 'DELETE_TASK':
      return tasks.filter(task => task.id !== action.payload);
    default:
      return tasks;
  }
};

const initialTasks = [
  {
    id: 0,
    title: 'Use Hooks',
    done: false,
  },
  {
    id: 1,
    title: 'Awesome!',
    done: false,
  },
  {
    id: 2,
    title: 'Learn React',
    done: true,
  },
  {
    id: 3,
    title: 'Ignore Redux',
    done: true,
  },
];


function App() {
  const [tasks, dispatch] = useReducer(TodoReducer, initialTasks);

  return (
    <TodoListContext.Provider value={{ tasks, dispatch }}>
      <div className="App">
        <Header as="h1" content="Todo List made with React Hooks" textAlign="center" />
        <Container text>
          <Segment size="massive">
            <AddTask />
            <Divider section />
            <TaskList />
          </Segment>
        </Container>
      </div>
    </TodoListContext.Provider>
  );
}
export default App;
