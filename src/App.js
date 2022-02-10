import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navitem from './components/NavItem/Navitem';
import { nanoid } from 'nanoid';

function App() {
  const [navItems, setNavItems] = React.useState([
    { name: 'Profile', id: nanoid() },
    { name: 'Education', id: nanoid() },
    { name: 'Experience', id: nanoid() },
    { name: 'Skills', id: nanoid() },
  ]);
  const [activeNavItem, setActiveNavItem] = React.useState('');
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
  console.log(activeNavItem);
  return (
    <div className="flex-wrapper">
      <header>My Cv Creator</header>
      <aside>
        <nav>{navList}</nav>
      </aside>
      <main>
        <form className="resume-form"></form>
        <div className="preview-wrapper"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
