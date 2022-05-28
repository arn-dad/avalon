import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1>{t('titles.welcome')}</h1>
        <h2>Proin faucibus arcu faucibus arcu</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;