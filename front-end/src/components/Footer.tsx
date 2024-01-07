import React from 'react';
import '../stylesheets/main.css';
import '../stylesheets/footer.css'; 
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {

    const navigate = useNavigate()

    const handleImprintClick = () => {
      navigate(`/imprint`);
    };
    
    const handleAboutClick = () => {
        navigate(`/about`);
      };
      
  return (
    <>
    <footer>
        <div className="footer-container flex-row">
            
            <div className="flex-column" id="inner-footer-1">
                <div id="project-desc">
                    <p>PawDopt is an interactive pet adoption website dedicated to placing pets in loving homes.</p>
                    <p>Users can browse through our collection of pets, find detailed information about each animal, and initiate adoption processes.</p>                           
                    <p>Our goal is to provide every pet with a caring and permanent home.</p>
                </div>
            </div>

            <div className="flex-column" id="inner-footer-2">
                <div className="flex-row authors">
                    <div className="author">
                        <p id="author-name">Reinardus Navellio</p>
                        <address>
                            Matrikelnummer: 584456<br />
                            B.Sc. AI, Fachbereich 4<br />
                            HTW Berlin <br />
                            s0584456@Student.HTW-Berlin.de
                        </address>
                    </div>
                </div>

                <div className="flex-row" id="footer-links">
                    <a onClick={handleImprintClick} className="imprint">Imprint</a>
                    <span className="separator">|</span>
                    <a onClick={handleAboutClick} className="about">About</a>
                </div>
            </div>

            <img src="/htw_logo.png" alt="htw_logo" id="htw_logo" />
        </div>

        
    </footer>
    
    <div className='additional-layer'></div>

    </>
  );
};

export default Footer;
