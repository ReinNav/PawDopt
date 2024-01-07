import React from 'react';
import '../stylesheets/main.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About PawDopt</h1>
      
      <section>
        <h2>Mission & Vision</h2>
        <p>"PawDopt" is dedicated to helping find loving homes for pets. We believe that every pet deserves a caring and permanent home. Our platform allows users to browse through a collection of pets, find detailed information about each animal, and begin the adoption process. Our goal is to simplify the pet adoption process and make it more accessible to everyone.</p>
      </section>
      <section>
        <h2>Contact Information</h2>
        <p>
          PawDopt Animal Adoption Services<br />
          Sample Street 123<br />
          12345 Sample City<br />
          Phone Number: 01234/56789<br />
          Email: info@pawdopt.com
        </p>
      </section>

      <section>
        <h2>About the Developers</h2>
        <p>Reinardus Navellio<br />
           B.Sc. Angewandte Informatik<br />
           HTW Berlin, Fachbereich 4<br />
           12345 Berlin<br />
           s0584456@Student.HTW-Berlin.de
        </p>
      </section>

      <section>
        <h2>GitHub Repository</h2>
        <p>Learn more about the project on GitHub:</p>
        <a href="https://github.com/ReinNav/PawDopt">PawDopt on GitHub</a>
      </section>
    </div>
  );
};

export default About;
