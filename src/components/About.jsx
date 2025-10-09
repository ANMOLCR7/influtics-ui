// components/About.jsx
import React from 'react';

function About() {
  return (
    <div className="jo-intro-lives-wrapper">
      {/* INTRO SECTION START */}
      <section className="jo-intro">
        <div className="jo-container">
          <div className="row align-items-center">
            {/* txt */}
            <div className="col-xl-6 col-lg-7 col-8">
              <div className="jo-intro__txt">
                <h2 className="jo-section-title">I'm a Social Media influencer & digital content creator</h2>
                <p className="jo-intro__descr">
                  consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. 
                  Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. 
                  Donec eget fermentum libero, ac aliquet lectus.
                </p>

                <ul className="jo-intro__list">
                  <li>Non mattis nulla, in ultrices diam</li>
                  <li>Web design done Delightful Visualization</li>
                  <li>Alienum phaedrum torquatos nec eu, vis detraxit periculis</li>
                  <li>Software Makes Your Profit Double if You Scale Properly.</li>
                </ul>

                <a href="/contact" className="jo-btn">Contact Me</a>
              </div>
            </div>

            {/* img */}
            <div className="col-xl-6 col-lg-5 col-4">
              <div className="jo-intro__img">
                <a 
                  href="https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg" 
                  className="play-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="flaticon-play"></i>
                </a>
                <img src="/assets/img/intro-img.jpg" alt="intro image" />
              </div>
            </div>
          </div>
        </div>

        {/* vector */}
        <img src="/assets/img/intro-vector.svg" alt="vector" className="jo-intro__vector" />
      </section>
      {/* INTRO SECTION END */}
    </div>
  );
}

export default About;