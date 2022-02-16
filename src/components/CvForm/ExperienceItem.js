import React from 'react';
import Button from '../Utils/Button/Button';
import Input from '../Utils/Input/Input';
import Task from '../Utils/Task/Task';

function ExperienceItem(props) {
  const {
    item,
    handleChange,
    id,
    handleAddJobResponsibilities,
    handleDeleteJobResponsibilities,
    handleChangeJobResponsibilities,
  } = props;
  const tasks = item.jobResponsibilities.map((task, index) => {
    return (
      <Task
        key={index}
        id={id}
        placeholder="Did awesome stuff at company"
        value={task}
        handleChange={handleChangeJobResponsibilities}
        index={index}
      />
    );
  });
  return (
    <section className="form-section">
      <Input
        name="companyName"
        id={id}
        label="Company Name"
        placeholder="Google LLC"
        value={item.companyName}
        handleChange={handleChange}
      />
      <Input
        name="jobTitle"
        id={id}
        label="Job Title"
        placeholder="Software Engineer"
        value={item.jobTitle}
        handleChange={handleChange}
      />
      <Input
        name="jobLocation"
        id={id}
        label="Job Location"
        placeholder="Mountain View, CA"
        value={item.jobLocation}
        handleChange={handleChange}
      />
      <Input
        name="startDate"
        id={id}
        label="Start Date"
        placeholder="July 2021"
        value={item.startDate}
        handleChange={handleChange}
      />
      <Input
        name="endDate"
        id={id}
        label="End Date"
        placeholder="Present"
        value={item.endDate}
        handleChange={handleChange}
      />
      <div className="form-input">
        <label>Job Responsibilities</label>
        {tasks}
        <div className="task-buttons-container">
          <Button
            name="+"
            id={id}
            handleClick={handleAddJobResponsibilities}
            classification="Add"
          />
          <Button
            name="-"
            id={id}
            handleClick={handleDeleteJobResponsibilities}
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceItem;
