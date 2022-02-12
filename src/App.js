import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navitem from './components/NavItem/Navitem';
import PersonalInfo from './components/CvForm/PersonalInfo';
import Education from './components/CvForm/Education';
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
    education: {
      schoolName: '',
      schoolLocation: '',
      degree: '',
      major: '',
      gpa: '',
      startDate: '',
      endDate: '',
    },
  });
  const [activeNavItem, setActiveNavItem] = React.useState('');
  function handleInputOnChange(event, category, id) {
    //you wanna have a means to be able to link the input field with the appropriate object in state automatically
    const value = event.currentTarget.value;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [category]: {
          ...prevFormData[category],
          [id]: value,
        },
      };
    });
    console.log(formData);
  }
  function setActive(id) {
    setActiveNavItem(id);
  }

  const navList = navItems.map((item) => (
    <Navitem
      key={item.id}
      name={item.name}
      id={item.id}
      active={activeNavItem}
      setActive={setActive}
    />
  ));

  return (
    <div className="flex-wrapper">
      <header className="header">My Cv Creator</header>
      <aside>
        <nav>{navList}</nav>
      </aside>
      <main>
        <form className="resume-form">
          <Education
            formData={formData}
            handleInputOnChange={handleInputOnChange}
          />
        </form>
        <div className="preview-wrapper"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
