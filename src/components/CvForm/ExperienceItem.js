import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

function ExperienceItem(props) {
  const { item, handleChange, id, handleAddJobResponsibilities } = props;

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
      <>
        <Input
          name="jobResponsibilites"
          id={id}
          label="Job Responsibilites"
          placeholder="Did awesome stuff company"
          value={item.jobResponsibilites}
          handleChange={handleChange}
        />
        <div className="task-buttons-container">
          <Button
            name="+"
            id={id}
            handleClick={handleAddJobResponsibilities}
            classification="Add"
          />
        </div>
      </>
    </section>
  );
}

export default ExperienceItem;
