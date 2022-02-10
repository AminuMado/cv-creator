import React from 'react';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="flex-wrapper">
        <header>My Cv Creator</header>
        <aside>
          <nav></nav>
        </aside>
        <main>
          <form className="resume-form"></form>
          <div className="preview-wrapper"></div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
