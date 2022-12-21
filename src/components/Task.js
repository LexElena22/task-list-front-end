import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, updateTask, deleteTask }) => {
  let buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const updateTaskStatus = () => {
    updateTask(id, !isComplete);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {
          updateTaskStatus();
        }}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
