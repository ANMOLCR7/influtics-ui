// components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`jo-sidebar ${isOpen ? 'active' : ''}`}>
      <div>
        <div className="jo-sidebar__heading d-flex justify-content-between align-items-center">
          <a href="#">
            <img src="assets/img/logo.svg" alt="logo" className="logo" />
          </a>
          <button type="button" className="jo-sidebar-close-btn" onClick={onClose}>
            <i className="flaticon-add-plus-button"></i>
          </button>
        </div>
        <div className="jo-header-nav-in-mobile"></div>
      </div>
      <div>
        <a href="about.html" className="jo-btn">
          <i className="flaticon-add-plus-button"></i>Follow Me
        </a>
        <div className="tt-footer-top__socials jo-footer-top__socials jo-sidebar-socials justify-content-start justify-content-sm-end">
          <a href="#"><i className="flaticon-facebook-1"></i></a>
          <a href="#"><i className="flaticon-twitter"></i></a>
          <a href="#"><i className="flaticon-social-media"></i></a>
          <a href="#"><i className="flaticon-youtube-1"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;