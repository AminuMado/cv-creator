import React from 'react';
import './Footer.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © 2022 AminuMado</p>
      <a href="https://github.com/AminuMado" target="_blank">
        <FontAwesomeIcon className="github-logo" icon={faGithub} />
      </a>
    </footer>
  );
}

export default Footer;
