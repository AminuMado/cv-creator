import React from 'react';
import Input from '../Input/Input';

function Education(props) {
  const { formData, handleInputOnChange } = props;
  return (
    //school name, school Location,degree, major,gpa, start ddate,end date
    <section className="form-section">
      <Input
        placeholder="Stanford University"
        handleInputOnChange={handleInputOnChange}
        name="schoolName"
        category="education"
        label="School Name"
        value={formData.education.schoolName}
      />
      <Input
        placeholder="Stanford CA"
        handleInputOnChange={handleInputOnChange}
        name="schoolLocation"
        category="education"
        label="School Location"
        value={formData.education.schoolLocation}
      />
      <Input
        placeholder="Bsc"
        handleInputOnChange={handleInputOnChange}
        name="degree"
        category="education"
        label="Degree"
        value={formData.education.degree}
      />
      <Input
        placeholder="Computer Science"
        handleInputOnChange={handleInputOnChange}
        name="major"
        category="education"
        label="Major"
        value={formData.education.major}
      />
      <Input
        placeholder="4.0"
        handleInputOnChange={handleInputOnChange}
        name="gpa"
        category="education"
        label="GPA"
        value={formData.education.gpa}
      />
      <Input
        placeholder=" July 2021"
        handleInputOnChange={handleInputOnChange}
        name="startDate"
        category="education"
        label="Start Date"
        value={formData.education.startDate}
      />
      <Input
        placeholder=" Feb 2022"
        handleInputOnChange={handleInputOnChange}
        name="endDate"
        category="education"
        label="End Date"
        value={formData.education.endDate}
      />
    </section>
  );
}
export default Education;
