// components/Services.jsx
import React, { useState } from 'react';

function Services() {
  const tabs = [
    { id: 'service-1', label: 'Brand Collaborations' },
    { id: 'service-2', label: 'Empowering Creators' },
    { id: 'service-3', label: 'Content Planner' },
    { id: 'service-4', label: 'Relevant Content' },
    { id: 'service-5', label: 'Social Media Management' },
  ];

  const [active, setActive] = useState('service-1');

  return (
    <section className="jo-services" id="services">
      <div className="jo-container">
        <div className="jo-services-wrapper">
          <div className="heading d-flex align-items-center justify-content-between mb-3">
            <h2 className="jo-section-title mb-0">What Will I Give You?</h2>
            <a href="#" className="jo-btn">View All Services</a>
          </div>

          <div className="jo-services-tabs-wrapper">
            <div className="jo-services-tab-navs d-flex flex-wrap gap-2 mb-3">
              {tabs.map(t => (
                <button
                  key={t.id}
                  className={`tab-nav ${active === t.id ? 'active' : ''}`}
                  onClick={() => setActive(t.id)}
                  data-tab={t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="tabs-container">
              {tabs.map(t => (
                <div key={t.id} className={`tt-tab ${active === t.id ? 'active' : ''}`} id={t.id}>
                  <div className="tt-service-tab">
                    {/* img */}
                    <div className="img">
                      <img src="/assets/img/service.jpg" alt="service image" />
                    </div>

                    {/* txt */}
                    <div className="txt">
                      <h5 className="title">Strategy Development</h5>
                      <p className="descr">consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>
                      <ul className="list">
                        <li>Unlimited influencer search</li>
                        <li>Unlimited direct messages with freelancer.</li>
                        <li>Unlimited requests for with celebrities.</li>
                        <li>Unlimited project tracking</li>
                        <li>Unlimited Campaign monitoring.</li>
                        <li>Goal Setting Begin by clearly defining</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;