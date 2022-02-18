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
        <div className="experience-header">
          <div className="company-information">
            <div className="cv-flex-wrapper">
              <h2 className="experience-name">{experienceItem.companyName}</h2>
              <h4 className="experience-location">
                {experienceItem.jobLocation}
              </h4>
            </div>
            <h4 className="experience-title">{experienceItem.jobTitle}</h4>
          </div>
          <div className="company-dates">
            <div className="experience-period">
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
      <div className="title-container">
        <h2>Experience</h2>
      </div>
      <div className="content-container">{experienceItem}</div>
    </div>
  );
}
export default CvExperience;
