import React from 'react';
import EducationItem from './EducationItem';

function Education(props) {
  const { formData, handleChange } = props;
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

  return <>{EducationItems}</>;
}
export default Education;
