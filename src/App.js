import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = INITIAL_TASKS.map((task) => {
    return { ...task };
  });
  const [taskList, setTasklist] = useState(initialCopy);
  const updateTask = (taskId, updatedStatus) => {
    console.log('updateTask called');
    const newTaskList = [];
    for (const task of taskList) {
      if (task.id != taskId) {
        newTaskList.push(task);
      } else {
        const newTask = {
          ...task,
          isComplete: updatedStatus,
        };
        newTaskList.push(newTask);
      }
    }
    setTasklist(newTaskList);
  };

  const deleteTask = (taskId) => {
    const newTaskList = [];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTaskList.push(task);
      }
    }
    setTasklist(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={taskList}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
