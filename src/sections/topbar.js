import React from 'react';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    console.log('e', event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
        <i className="bi bi-phone"></i> +1 5589 55488 55
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <div className="d-none d-lg-flex social-links align-items-center lang-drop_m">
        <select onChange={handleChange} className="form-select lang-selector_m" aria-label="Default select example" value={i18n.language}>
          <option value="arm">Հայ</option>
          <option value="ru">Ру</option>
          <option value="en">Eng</option>
        </select>
        </div>
      </div>
    
    </div>
  </div>
  );
};

export default TopBar;