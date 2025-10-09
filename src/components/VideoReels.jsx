// components/VideoReels.jsx
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const VideoReels = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const reels = [
    { 
      id: 1,
      thumb: '/assets/img/reel-thumb-1.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 2,
      thumb: '/assets/img/reel-thumb-2.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 3,
      thumb: '/assets/img/reel-thumb-3.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 4,
      thumb: '/assets/img/reel-thumb-4.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 5,
      thumb: '/assets/img/reel-thumb-5.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 6,
      thumb: '/assets/img/reel-thumb-1.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    },
    { 
      id: 7,
      thumb: '/assets/img/reel-thumb-2.jpg',
      platform: 'Facebook Reel',
      platformIcon: '/assets/img/social-icon-1.png',
      title: 'Can Robot Solve This ...?',
      views: '16M views'
    }
  ];

  return (
    <section className="jo-reels">
      <div className="jo-container">
        <div className="jo-reels-heading">
          <button 
            ref={prevButtonRef}
            className="jo-slider-nav-btn jo-reels-slider-prev"
          >
            <i className="flaticon-left-arrow"></i>
          </button>
          <h2 className="jo-section-title">Latest Video Reels</h2>
          <button 
            ref={nextButtonRef}
            className="jo-slider-nav-btn jo-reels-slider-next"
          >
            <i className="flaticon-right-arrow"></i>
          </button>
        </div>
      </div>
      
      <div className="jo-reels-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onInit={(swiper) => {
            // Override navigation elements after init
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false 
          }}
          breakpoints={{
            320: { 
              slidesPerView: 1,
              spaceBetween: 10
            },
            576: { 
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: { 
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: { 
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="jo-reels-slider swiper"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel.id} className="swiper-slide">
              <div className="jo-reel">
                <div className="jo-reel-video position-relative">
                  <video 
                    controls 
                    poster={reel.thumb} 
                    src="https://videos.pexels.com/video-files/3402899/3402899-sd_506_960_25fps.mp4"
                  ></video>
                  <a href="#" className="link">
                    <img src={reel.platformIcon} alt="platform logo" />
                    {reel.platform}
                  </a>
                </div>
                <div className="jo-reel-txt">
                  <h5 className="jo-reel-title">
                    <a href="#">{reel.title}</a>
                  </h5>
                  <div className="jo-reel-info">
                    <span><i className="flaticon-bell"></i></span>
                    <span>{reel.views}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoReels;