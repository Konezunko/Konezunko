import React from 'react';
import { Container } from 'react-bootstrap';
import './kv.scss';

function Kv() {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutMe');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="kv-wrap">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="site-heading">
          <h1>Hiro.exe</h1>
          <p className="subtitle">Student / Programmer / Skier</p>

        </div>
        <div className="scroll-arrow" onClick={scrollToAboutMe}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </Container>
    </div>
  );
}

export default Kv;
