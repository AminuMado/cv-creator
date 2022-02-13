import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navitem from './components/NavItem/Navitem';
import PersonalInfo from './components/CvForm/PersonalInfo';
import Education from './components/CvForm/Education';
import { nanoid } from 'nanoid';
import Experience from './components/CvForm/Experience';

function App() {
  const [navItems, setNavItems] = React.useState([
    { name: 'Profile', id: nanoid() },
    { name: 'Education', id: nanoid() },
    { name: 'Experience', id: nanoid() },
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
        jobResponsibilites: '',
        startDate: '',
        endDate: '',
      },
    ],
  });
  const [activeNavItem, setActiveNavItem] = React.useState('');
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
      jobResponsibilites: [],
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
  console.log(activeNavItem);
  return (
    <div className="flex-wrapper">
      <header className="header">My Cv Creator</header>
      <aside>
        <nav>{navList}</nav>
      </aside>
      <main>
        <form className="resume-form">
          {/* <PersonalInfo
            formData={formData}
            handleChange={handleChangePersonalInfo}
          /> */}
          {/* <Education
            formData={formData}
            handleChange={handleChangeEducation}
            handleAdd={handleAddEducation}
            handleDelete={handleDeleteEducation}
          /> */}
          <Experience
            formData={formData}
            handleChange={handleChangeExperience}
            handleAdd={handleAddExperience}
            handleDelete={handleDeleteExperience}
          />
        </form>
        <div className="preview-wrapper"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
