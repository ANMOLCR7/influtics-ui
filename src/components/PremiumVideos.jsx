// components/PremiumVideos.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function PremiumVideos() {
  const firstSliderVideos = [
    {
      id: 1,
      image: '/assets/img/jo-video-1.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      premium: true,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    },
    {
      id: 2,
      image: '/assets/img/jo-video-2.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      premium: true,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    },
    {
      id: 3,
      image: '/assets/img/jo-video-3.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      premium: true,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    }
  ];

  const secondSliderVideos = [
    {
      id: 4,
      image: '/assets/img/jo-video-4.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: 'Free',
      premium: false,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    },
    {
      id: 5,
      image: '/assets/img/jo-video-5.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      premium: true,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    },
    {
      id: 6,
      image: '/assets/img/jo-video-6.jpg',
      title: 'Smiley woman pop party studio medium shot',
      price: '$5.00',
      premium: true,
      views: '16M views',
      time: '49 minutes ago',
      videoUrl: 'https://youtu.be/vc3WCrgYpF0?si=W2iFDfdDYsh6spKg'
    }
  ];

  const splideOptions = {
    perPage: 3,
    gap: '1rem',
    breakpoints: {
      1200: { perPage: 3 },
      768: { perPage: 2 },
      576: { perPage: 1 }
    },
    pagination: false,
    arrows: true,
    drag: 'free'
  };

  return (
    <section className="jo-videos">
      <div className="jo-container">
        {/* heading */}
        <div className="jo-videos__heading">
          <h2 className="jo-section-title">My Latest Premium Videos</h2>
          <a href="/videos-1" className="jo-btn jo-videos__btn">
            <i className="flaticon-premium-quality"></i> View All Videos
          </a>
        </div>
      </div>

      {/* First video slider */}
      <div className="jo-videos-slider splide">
        <Splide options={splideOptions} aria-label="First Video Slider">
          {firstSliderVideos.map((video) => (
            <SplideSlide key={video.id}>
              <div className="jo-video-card">
                <img src={video.image} alt="Video Thumbnail" className="jo-video-card__img" />

                <div className="jo-video-card__txt">
                  <div className="d-flex justify-content-between">
                    <a 
                      href={video.videoUrl} 
                      data-fslightbox="videos" 
                      className="jo-video-card__btn"
                    >
                      <i className="flaticon-play"></i>
                    </a>
                    {video.premium && (
                      <span className="jo-video-card__premium-tag">
                        <i className="flaticon-premium-quality"></i>
                      </span>
                    )}
                  </div>

                  <div className="bottom">
                    <span className="price">{video.price}</span>
                    <h5>
                      <a href="/video-details" className="jo-video-card__title">
                        {video.title}
                      </a>
                    </h5>
                    <div className="tt-video__infos jo-video-card__infos">
                      <span>{video.views}</span>
                      <span>{video.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Second video slider */}
      <div className="jo-videos-slider-2 splide">
        <Splide options={splideOptions} aria-label="Second Video Slider">
          {secondSliderVideos.map((video) => (
            <SplideSlide key={video.id}>
              <div className="jo-video-card">
                <img src={video.image} alt="Video Thumbnail" className="jo-video-card__img" />

                <div className="jo-video-card__txt">
                  <div className="d-flex justify-content-between">
                    <a 
                      href={video.videoUrl} 
                      data-fslightbox="videos" 
                      className="jo-video-card__btn"
                    >
                      <i className="flaticon-play"></i>
                    </a>
                    <span className={`jo-video-card__premium-tag ${!video.premium ? 'd-none' : ''}`}>
                      <i className="flaticon-premium-quality"></i>
                    </span>
                  </div>

                  <div className="bottom">
                    <span className="price">{video.price}</span>
                    <h5>
                      <a href="/video-details" className="jo-video-card__title">
                        {video.title}
                      </a>
                    </h5>
                    <div className="tt-video__infos jo-video-card__infos">
                      <span>{video.views}</span>
                      <span>{video.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default PremiumVideos;