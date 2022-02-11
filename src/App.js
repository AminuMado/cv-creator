import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navitem from './components/NavItem/Navitem';
import Input from './components/Input/Input';
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
      firstName: '',
      lastName: 'Doe',
      title: 'Senior Web Developer',
      address: 'Example Street 10',
      phoneNumber: '123456789',
      email: 'john.doe@gmail.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
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
      <header>My Cv Creator</header>
      <aside>
        <nav>{navList}</nav>
      </aside>
      <main>
        <form className="resume-form">
          <Input
            placeholder="Input your name here"
            handleInputOnChange={handleInputOnChange}
            id="firstName"
            category="personalInfo"
            label="FirstName"
            value={formData.personalInfo.firstName}
          />
        </form>
        <div className="preview-wrapper"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
