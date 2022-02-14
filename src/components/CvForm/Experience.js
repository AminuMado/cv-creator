import React from 'react';
import ExperienceItem from './ExperienceItem';
import Button from '../Button/Button';

function Experience(props) {
  const {
    formData,
    handleChange,
    handleAdd,
    handleDelete,
    handleAddJob,
    handleAddJobResponsibilities,
  } = props;
  const ExperienceItems = formData.experience.map((item) => {
    return (
      <ExperienceItem
        key={item.id}
        id={item.id}
        item={item}
        handleChange={handleChange}
        handleAddJob={handleAddJob}
        handleAddJobResponsibilities={handleAddJobResponsibilities}
      />
    );
  });

  return (
    <>
      {ExperienceItems}
      <div className="buttons-container">
        <Button name="Add Job" handleClick={handleAdd} classification="Add" />
        <Button
          name="Remove Job"
          handleClick={handleDelete}
          classification="Delete"
        />
      </div>
    </>
  );
}
export default Experience;
