// components/UpcomingLives.jsx
import React from 'react';

function UpcomingLives() {
  const lives = [
    {
      id: 1,
      image: '/assets/img/umcoming-live-1.jpg',
      platform: 'Facebook Live',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Smiley woman pop party studio medium shot',
      date: '25 Jun, 2024',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.'
    },
    {
      id: 2,
      image: '/assets/img/umcoming-live-2.jpg',
      platform: 'Youtube Live',
      platformIcon: '/assets/img/social-icon-4.png',
      title: 'Smiley woman pop party studio medium shot',
      date: '25 Jun, 2024',
      description: 'consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.'
    }
  ];

  return (
    <div className="jo-intro-lives-wrapper">

      {/* UPCOMING LIVES SECTION START */}
      <section className="jo-upcoming-lives">
        <div className="jo-container">
          {/* heading */}
          <div className="jo-upcoming-lives__heading">
            <h2 className="jo-section-title">My Upcoming Lives</h2>
          </div>

          <div>
            {lives.map((live) => (
              // live card
              <div key={live.id} className="jo-upcoming-live">
                <div className="jo-upcoming-live__img">
                  <img src={live.image} alt="live image" />
                </div>
                <div className="jo-upcoming-live__txt">
                  <a href="#" className="platform-tag">
                    <img src={live.platformIcon} alt="platform logo" />
                    {live.platform}
                  </a>
                  <h5 className="title">{live.title}</h5>
                  <span className="date">{live.date}</span>
                  <p className="descr">{live.description}</p>
                  <a href="/checkout" className="jo-btn">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* UPCOMING LIVES SECTION END */}
    </div>
  );
}

export default UpcomingLives;