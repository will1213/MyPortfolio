import React from 'react';
import './css/Card.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { IconContext } from 'react-icons';

function Card({ title, description, gitLink, hostLink}) {
  return (
    <div className="card">
      <h2 className="card-title">
        {title}
        {gitLink && (
          <IconContext.Provider value={{ color: 'black' }}>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          </IconContext.Provider>
        )}
        {hostLink && (
            <IconContext.Provider value={{ color: 'black' }}>
            <a href={hostLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </IconContext.Provider>
        )}
      </h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
