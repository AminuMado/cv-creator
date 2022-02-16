import React from 'react';
import Input from '../Utils/Input/Input';

function EducationItem(props) {
  const { item, handleChange, id } = props;
  return (
    <section className="form-section">
      <Input
        name="schoolName"
        id={id}
        label="School Name"
        placeholder="Stanford University"
        value={item.schoolName}
        handleChange={handleChange}
      />
      <Input
        name="schoolLocation"
        id={id}
        label="School Location"
        placeholder="Stanford CA"
        value={item.schoolLocation}
        handleChange={handleChange}
      />
      <Input
        name="degree"
        id={id}
        label="Degree"
        placeholder="Bsc"
        value={item.degree}
        handleChange={handleChange}
      />
      <Input
        name="major"
        id={id}
        label="Major"
        placeholder="Computer Science"
        value={item.major}
        handleChange={handleChange}
      />
      <Input
        name="gpa"
        id={id}
        label="GPA"
        placeholder="4.0"
        value={item.gpa}
        handleChange={handleChange}
      />
      <Input
        name="startDate"
        id={id}
        label="Start Date"
        placeholder=" July 2021"
        value={item.startDate}
        handleChange={handleChange}
      />
      <Input
        name="endDate"
        id={id}
        label="End Date"
        placeholder=" Feb 2022"
        value={item.endDate}
        handleChange={handleChange}
      />
    </section>
  );
}

export default EducationItem;
