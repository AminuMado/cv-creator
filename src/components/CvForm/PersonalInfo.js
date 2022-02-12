import React from 'react';
import Input from '../Input/Input';

function PersonalInfo(props) {
  console.log(props);
  const { handleInputOnChange, formData } = props;
  return (
    <section>
      <Input
        placeholder="James Bond"
        handleInputOnChange={handleInputOnChange}
        id="fullName"
        category="personalInfo"
        label="FullName"
        value={formData.personalInfo.fullName}
      />
      <Input
        placeholder="007"
        handleInputOnChange={handleInputOnChange}
        id="title"
        category="personalInfo"
        label="Title"
        value={formData.personalInfo.title}
      />
      <Input
        placeholder="jamesbond@gmail.com"
        handleInputOnChange={handleInputOnChange}
        id="email"
        category="personalInfo"
        label="Email"
        value={formData.personalInfo.email}
      />
      <Input
        placeholder="MI6, Great Britain"
        handleInputOnChange={handleInputOnChange}
        id="address"
        category="personalInfo"
        label="Address"
        value={formData.personalInfo.address}
      />
      <Input
        placeholder="(00)-007"
        handleInputOnChange={handleInputOnChange}
        id="phoneNumber"
        category="personalInfo"
        label="Phone Number"
        value={formData.personalInfo.phoneNumber}
      />
      <Input
        placeholder=" Bond is a highly unique individual. He appears to be of sound mind and strong spirit."
        handleInputOnChange={handleInputOnChange}
        id="description"
        category="personalInfo"
        label="Description"
        value={formData.personalInfo.description}
      />
    </section>
  );
}

export default PersonalInfo;
