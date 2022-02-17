import React from 'react';

function CvExperience({ experience }) {
  const experienceItem = experience.map((experienceItem, index) => {
    const jobResponsibilities = experienceItem.jobResponsibilities.map(
      (jobResponsibility, index) => {
        return <li key={index}>{jobResponsibility}</li>;
      }
    );
    return (
      <div className="experience-item-wrapper" key={index}>
        <div class="experience-header">
          <div class="company-information">
            <div class="cv-flex-wrapper">
              <h2 class="experience-name">{experienceItem.companyName}</h2>
              <h4 class="experience-location">{experienceItem.jobLocation}</h4>
            </div>
            <h4 class="experience-title">{experienceItem.jobTitle}</h4>
          </div>
          <div class="company-dates">
            <div class="experience-period">
              {experienceItem.startDate} {` - ${experienceItem.endDate}`}
            </div>
          </div>
        </div>

        <div className="experience-responsibilities">
          <ul>{jobResponsibilities}</ul>
        </div>
      </div>
    );
  });
  return (
    <div className="cv-experience-wrapper">
      <div class="title-container">
        <h2>Experience</h2>
      </div>
      <div class="content-container">{experienceItem}</div>
    </div>
  );
}
export default CvExperience;
