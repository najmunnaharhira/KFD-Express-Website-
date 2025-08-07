import "./Footer.css";
import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
           <img src={assets.logo} alt="logo"/>
           <p>Fresh flavors for every craving — discover the future of food with Tomato in 2025. Your favorite meals, delivered with love and taste.</p>
         {/* <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
           </div> */}
          <div className="footer-social-icons">
  <a
    href="https://www.facebook.com/najmunnahar360"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.facebook_icon} alt="facebook" />
  </a>
  <a
    href="https://www.linkedin.com/in/najmunnaharhira360"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.linkedin_icon} alt="linkedin" />
  </a>
  <a
    href="https://twitter.com/najmunnaharhira360"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.twitter_icon} alt="twitter" />
  </a>
</div>

        </div>  
        <div className="footer-content-center">
           {/* <h2>COMPANY</h2> */}
           <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Delivery</li>
             <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+8801647431836</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        © 2025 Tomato.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
