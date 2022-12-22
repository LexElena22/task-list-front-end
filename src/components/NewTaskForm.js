import React from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

const INITIAL_FORM_DATA = {
  title: '',
  description: '',
};

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    props.addTaskCallbackFunc(formData);
  };

  return (
    <form onSubmit={handleNewTaskSubmit}>
      <label htmlFor="title">Task Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Task Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <input type="submit" value="Add task" />
    </form>
  );
};
NewTaskForm.propTypes = {
  addTaskCallbackFunc: PropTypes.func.isRequired,
};
export default NewTaskForm;
