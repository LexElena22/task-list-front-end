import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, updateTask }) => {
  // const [complete, setComplete] = useState(isComplete);
  let buttonClass = '';
  const updateTaskStatus = (complete) => {
    if (complete) {
      // complete!== complete;
      console.log('print inside update task status');

      updateTask(id, !isComplete);
      buttonClass = complete ? 'tasks__item__toggle--completed' : '';
    }
  };
  buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {
          updateTaskStatus(true);
        }}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
