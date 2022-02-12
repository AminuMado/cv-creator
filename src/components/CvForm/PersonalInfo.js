import React from 'react';
import Input from '../Input/Input';
import './CvForm.css';

function PersonalInfo(props) {
  const { handleChange, formData } = props;
  return (
    <section className="form-section">
      <Input
        placeholder="James Bond"
        handleChange={handleChange}
        name="fullName"
        category="personalInfo"
        label="FullName"
        value={formData.personalInfo.fullName}
      />
      <Input
        placeholder="007"
        handleChange={handleChange}
        name="title"
        category="personalInfo"
        label="Title"
        value={formData.personalInfo.title}
      />
      <Input
        placeholder="jamesbond@gmail.com"
        handleChange={handleChange}
        name="email"
        category="personalInfo"
        label="Email"
        value={formData.personalInfo.email}
      />
      <Input
        placeholder="MI6, Great Britain"
        handleChange={handleChange}
        name="address"
        category="personalInfo"
        label="Address"
        value={formData.personalInfo.address}
      />
      <Input
        placeholder="(00)-007"
        handleChange={handleChange}
        name="phoneNumber"
        category="personalInfo"
        label="Phone Number"
        value={formData.personalInfo.phoneNumber}
      />
      <Input
        placeholder=" Bond is a highly unique indivnameual. He appears to be of sound mind and strong spirit."
        handleChange={handleChange}
        name="description"
        category="personalInfo"
        label="Description"
        value={formData.personalInfo.description}
      />
    </section>
  );
}

export default PersonalInfo;
