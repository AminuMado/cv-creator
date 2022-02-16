import React from 'react';
import Task from '../Utils/Task/Task';
import Button from '../Utils/Button/Button';
function Skills({
  formData,
  handleAddSkills,
  handleDeleteSkills,
  handleChangeSkills,
}) {
  const skills = formData.skills.map((skill, index) => (
    <Task
      key={index}
      placeholder="React"
      value={skill}
      handleChange={handleChangeSkills}
      id={index}
    />
  ));

  return (
    <section className="form-section">
      <div className="form-input">
        <label>Skills</label>
        {skills}
        <div className="task-buttons-container">
          <Button name="+" handleClick={handleAddSkills} classification="Add" />
          <Button name="-" handleClick={handleDeleteSkills} />
        </div>
      </div>
    </section>
  );
}
export default Skills;
