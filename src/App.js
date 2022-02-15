import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navitem from './components/NavItem/Navitem';
import PersonalInfo from './components/CvForm/PersonalInfo';
import Education from './components/CvForm/Education';
import Experience from './components/CvForm/Experience';
import Skills from './components/CvForm/Skills';
import { nanoid } from 'nanoid';

function App() {
  const [navItems, setNavItems] = React.useState([
    { name: 'Profile', id: nanoid() },
    { name: 'Education', id: nanoid() },
    { name: 'Experience', id: nanoid() },
    { name: 'Skills', id: nanoid() },
  ]);
  const [formData, setFormData] = React.useState({
    personalInfo: {
      fullName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    },
    education: [
      {
        id: nanoid(),
        schoolName: '',
        schoolLocation: '',
        degree: '',
        major: '',
        gpa: '',
        startDate: '',
        endDate: '',
      },
    ],
    experience: [
      {
        id: nanoid(),
        companyName: '',
        jobTitle: '',
        jobLocation: '',
        jobResponsibilities: [''],
        startDate: '',
        endDate: '',
      },
    ],
    skills: [''],
  });
  const [activeNavItem, setActiveNavItem] = React.useState('Profile');
  const navList = navItems.map((item) => (
    <Navitem
      key={item.id}
      name={item.name}
      id={item.id}
      active={activeNavItem}
      setActive={setActive}
    />
  ));

  // Personal Info handlers

  function handleChangePersonalInfo(event) {
    //you wanna have a means to be able to link the input field with the appropriate object in state automatically
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        personalInfo: {
          ...prevFormData.personalInfo,
          [name]: value,
        },
      };
    });
    console.log(formData);
  }
  function setActive(id) {
    setActiveNavItem(id);
  }

  // Education Section

  function handleChangeEducation(event, id) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setFormData((prevFormData) => {
      const newEducation = prevFormData.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevFormData, education: [...newEducation] };
    });
    console.log(formData.education);
  }
  function handleAddEducation(event) {
    //This function basically adds a new empty object in the formdata.education array
    // Important thing to note is you cant use array.push as that would mutate state directly
    // Instead you would spread the array items and add your new item at the end
    // also I'm going to limit it to 3 schools
    if (formData.education.length > 3) {
      return;
    }

    const newEducationData = {
      id: nanoid(),
      schoolName: '',
      schoolLocation: '',
      degree: '',
      major: '',
      gpa: '',
      startDate: '',
      endDate: '',
    };
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        education: [...prevFormData.education, newEducationData],
      };
    });
  }
  function handleDeleteEducation(event) {
    //This function basically removes the last object in the formdata.education array
    // Important thing to note is you cant use array.pop as that would mutate state directly
    // Instead you would spread the array items and remove the last item at the end
    // also you cant remove the last one i.e if array.length = 1 do not delete
    if (formData.education.length < 2) {
      return;
    }
    setFormData((prevFormData) => {
      const newEducation = prevFormData.education.slice(0, -1);
      return { ...prevFormData, education: [...newEducation] };
    });
  }

  // Experience Setion
  function handleChangeExperience(event, id) {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setFormData((prevFormData) => {
      const newExperience = prevFormData.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevFormData, experience: [...newExperience] };
    });
    console.log(formData.experience);
  }
  function handleAddExperience(event) {
    if (formData.experience.length > 3) {
      return;
    }

    const newExperienceData = {
      id: nanoid(),
      companyName: '',
      jobTitle: '',
      jobLocation: '',
      jobResponsibilities: [''],
      startDate: '',
      endDate: '',
    };
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        experience: [...prevFormData.experience, newExperienceData],
      };
    });
  }
  function handleDeleteExperience(event) {
    if (formData.experience.length < 2) {
      return;
    }
    setFormData((prevFormData) => {
      const newExperience = prevFormData.experience.slice(0, -1);
      return { ...prevFormData, experience: [...newExperience] };
    });
  }
  // Task Section
  function handleAddJobResponsibilities(event, id) {
    //This function below checks the experience array selects the one correct one based on id
    // Then goes ahead and access the jobresponsiblity array and adds a new one
    setFormData((prevFormData) => {
      const newExperienceData = prevFormData.experience.map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            const newJobResponsibilities = [
              ...experienceItem.jobResponsibilities,
              '',
            ];
            return {
              ...experienceItem,
              jobResponsibilities: newJobResponsibilities,
            };
          }
          return experienceItem;
        }
      );
      return { ...prevFormData, experience: [...newExperienceData] };
    });
    console.log(formData);
  }
  function handleDeleteJobResponsibilities(event, id) {
    //This also checks the array id first then creates a new array with the last element sliced off
    // Which is then added back to the object and set as new state
    setFormData((prevFormData) => {
      const newExperienceData = prevFormData.experience.map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            const newArray = experienceItem.jobResponsibilities.slice(0, -1);
            return { ...experienceItem, jobResponsibilities: newArray };
          }
          return experienceItem;
        }
      );
      return { ...prevFormData, experience: [...newExperienceData] };
    });
    console.log(formData);
  }
  function handleChangeJobResponsibilities(event, id, index) {
    setFormData((prevFormData) => {
      const newExperienceData = prevFormData.experience.map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            const newArray = [...experienceItem.jobResponsibilities];
            newArray[index] = event.target.value;
            return { ...experienceItem, jobResponsibilities: newArray };
          }
          return experienceItem;
        }
      );
      return { ...prevFormData, experience: [...newExperienceData] };
    });
  }
  // Skills Section
  function handleChangeSkills(event, id) {
    setFormData((prevFormData) => {
      const newArray = [...prevFormData.skills];
      newArray[id] = event.target.value;
      return { ...prevFormData, skills: [...newArray] };
    });
  }
  function handleAddSkills() {
    setFormData((prevFormData) => {
      return { prevFormData, skills: [...prevFormData.skills, ''] };
    });
  }
  function handleDeleteSkills() {
    setFormData((prevFormData) => {
      const newArray = prevFormData.skills.slice(0, -1);
      return { ...prevFormData, skills: [...newArray] };
    });
  }
  let display;
  if (activeNavItem === 'Profile') {
    display = (
      <PersonalInfo
        formData={formData}
        handleChange={handleChangePersonalInfo}
      />
    );
  } else if (activeNavItem === 'Education') {
    display = (
      <Education
        formData={formData}
        handleChange={handleChangeEducation}
        handleAdd={handleAddEducation}
        handleDelete={handleDeleteEducation}
      />
    );
  } else if (activeNavItem === 'Experience') {
    display = (
      <Experience
        formData={formData}
        handleChange={handleChangeExperience}
        handleAdd={handleAddExperience}
        handleDelete={handleDeleteExperience}
        handleAddJobResponsibilities={handleAddJobResponsibilities}
        handleDeleteJobResponsibilities={handleDeleteJobResponsibilities}
        handleChangeJobResponsibilities={handleChangeJobResponsibilities}
      />
    );
  } else if (activeNavItem === 'Skills') {
    display = (
      <Skills
        formData={formData}
        handleAddSkills={handleAddSkills}
        handleDeleteSkills={handleDeleteSkills}
        handleChangeSkills={handleChangeSkills}
      />
    );
  } else display = 'Nothing to Show';
  return (
    <div className="flex-wrapper">
      <header className="header">My Cv Creator</header>
      <aside>
        <nav>{navList}</nav>
      </aside>
      <main>
        <form className="resume-form">{display}</form>
        <div className="preview-wrapper"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
