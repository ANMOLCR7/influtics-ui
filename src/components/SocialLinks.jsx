// components/SocialLinks.js
import React from 'react';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      icon: 'assets/img/social-icon-1.png',
      name: 'Facebook',
      followers: '20.5K followers',
      buttonText: 'Follow Me'
    },
    {
      icon: 'assets/img/social-icon-2.png',
      name: 'Instagram',
      followers: '30.9K followers',
      buttonText: 'Follow Me'
    },
    {
      icon: 'assets/img/social-icon-3.png',
      name: 'Tiktok',
      followers: '2.5M followers',
      buttonText: 'Follow Me'
    },
    {
      icon: 'assets/img/social-icon-4.png',
      name: 'YouTube',
      followers: '1.69M Subscribers',
      buttonText: 'Subscribe'
    }
  ];

  return (
    <section className="jo-social-links">
      <div className="jo-container">
        <div className="row g-sm-4 g-3">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="col-md-3 col-6 col-xxs-12">
              <div className="jo-social-link">
                <div className="icon">
                  <img src={platform.icon} alt={`${platform.name} Icon`} />
                </div>
                <div className="txt">
                  <h5>{platform.name}</h5>
                  <span>{platform.followers}</span>
                </div>
                <a href="#" className="jo-btn">{platform.buttonText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;