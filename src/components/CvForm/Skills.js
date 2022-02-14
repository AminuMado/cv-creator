import React from 'react';
import Task from '../Task/Task';
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
      index={index}
    />
  ));

  return (
    <section className="form-section">
      <div className="form-input">
        <label>Skills</label>
        {skills}
        <div className="task-buttons-container">
          <Button
            name="+"
            id={id}
            handleClick={handleAddSkills}
            classification="Add"
          />
          <Button name="-" id={id} handleClick={handleDeleteSkills} />
        </div>
      </div>
    </section>
  );
}
export default Skills;
