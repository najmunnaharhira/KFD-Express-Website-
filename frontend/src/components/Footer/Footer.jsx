import "./Footer.css";
import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>🍽 Craving Something Delicious? Come experience the Genuine Taste from China — right here at KFD Express! 🥢</p>
          
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/kfdexpressbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
         
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Visit Us:</h2>
          <ul>
            <li>🏠 Banani Branch – House 53, 1st Floor, Road 17, Banani (Near Fu-Wang Tower)</li>
            <li>📲 Available on Foodi | Pathao | Food Panda</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch:</h2>
          <ul>
            <li>📞 Banani – 01311066552</li>
          </ul>
        </div>
      </div>
      
      <hr />
      
      <p className="footer-copyright">
        ✨ Come for the taste. Stay for the experience. Because at KFD, it’s not just food — it’s a feeling. ❤
      </p>
      <p className="footer-copyright">
        © 2025 KFD Express — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
