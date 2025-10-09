// components/Banner.js
import React from "react";

const Hero = () => {
  return (
    <section className="jo-banner">
      <div className="jo-banner-container">
        <div className="row gx-0 gy-4 align-items-center">
          <div className="col-lg-7">
            <div className="jo-banner__txt">
              <div className="jo-banner__notifi">
                <img src="/assets/img/user-dp-2.png" alt="img" />
                <span>Bryan has liked</span>
                <span className="icon">
                  <img src="/assets/img/love.svg" alt="icon" />
                </span>
              </div>
              <h1 className="jo-banner__title">
                <span>
                  I'm <span className="styled">Linda</span> Susan
                </span>
                <span>Beauty & Lifestyle</span>
                <span> Influencer</span>
              </h1>
              <div className="jo-banner__btns">
                <a href="#" className="jo-btn">
                  About Me
                </a>
                <a href="#" className="jo-btn">
                  Contact Me
                </a>
              </div>
              <img
                src="/assets/img/jo-banner-vector-1.svg"
                alt="vector"
                className="vector"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="jo-banner__img jo-contact__img">
              <img src="/assets/img/banner-2-img.png" alt="Image" />
              <div className="jo-banner__followers">
                <span className="number">74K</span>
                <span className="txt">Followers</span>
              </div>
              <div className="jo-banner__notifi">
                <img src="/assets/img/user-dp-2.png" alt="img" />
                <span>Bryan has liked</span>
                <span className="icon">
                  <img src="/assets/img/love.svg" alt="icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/jo-banner-vector-2.svg"
        alt="vector"
        className="vector"
      />
    </section>
  );
};

export default Hero;
