import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const INITIAL_TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  // const initialCopy = INITIAL_TASKS.map((task) => {
  //   return { ...task };
  // });
  const [taskList, setTasklist] = useState([]);

  const URL = 'http://localhost:5000/tasks';
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        //console.log(res);
        const tasksAPIResCopy = res.data.map((task) => {
          return {
            ...task,
          };
        });
        setTasklist(tasksAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateTask = (taskId, updatedStatus) => {
    let status = 'mark_complete';
    if (updatedStatus) {
      status = 'mark_complete';
    } else {
      status = 'mark_incomplete';
    }
    console.log('updateTask called');
    const newTaskList = [];
    axios
      .patch(`${URL}/${taskId}/${status}`)
      .then((res) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (taskId) => {
    console.log('deleteTask Called');
    axios
      .delete(`${URL}/${taskId}`)
      .then(() => {
        const newTaskList = [];
        for (const task of taskList) {
          if (task.id !== taskId) {
            newTaskList.push(task);
          }
        }
        setTasklist(newTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
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
