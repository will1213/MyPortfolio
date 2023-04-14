import React from 'react';
import resume from "./assets/resume.pdf"
import './css/ToolBar.css';

const Toolbar = () => {
  return (
    <nav className="toolbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href={resume} className="resume-link" download>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;