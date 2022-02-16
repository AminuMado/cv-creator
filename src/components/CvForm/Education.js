import React from 'react';
import EducationItem from './EducationItem';
import Button from '../Utils/Button/Button';

function Education(props) {
  const { formData, handleChange, handleAdd, handleDelete } = props;
  const EducationItems = formData.education.map((item) => {
    return (
      <EducationItem
        key={item.id}
        id={item.id}
        item={item}
        handleChange={handleChange}
      />
    );
  });

  return (
    <>
      {EducationItems}
      <div className="buttons-container">
        <Button
          name="Add School"
          handleClick={handleAdd}
          classification="Add"
        />
        <Button
          name="Delete School"
          handleClick={handleDelete}
          classification="Delete"
        />
      </div>
    </>
  );
}
export default Education;
