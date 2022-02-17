import React from 'react';

function CvEducation({ education }) {
  const educationItems = education.map((educationItem, index) => {
    return (
      <div className="education-item-wrapper" key={index}>
        <div class="education-header">
          <div class="cv-flex-wrapper">
            <h2 class="education-school-name">{educationItem.schoolName}</h2>
            <h4 class="education-school-location">
              {educationItem.schoolLocation}
            </h4>
          </div>
          <div class="education-period">
            {educationItem.startDate} {` -${educationItem.endDate}`}
          </div>
        </div>
        <div class="cv-flex-wrapper">
          <h2 class="education-degree">{educationItem.degree}</h2>
          <h2 class="education-major">{educationItem.major}</h2>
          <h4 class="education-gpa">{educationItem.gpa}GPA</h4>
        </div>
      </div>
    );
  });
  return (
    <div className="cv-education-wrapper">
      <div class="title-container">
        <h2>Education</h2>
      </div>
      <div class="content-container">{educationItems}</div>
    </div>
  );
}

export default CvEducation;
