import React from 'react';

function Footer() {
  return (
    <footer className="jo-footer">
      <div className="jo-container">
        {/* footer top */}
        <div className="jo-footer-top">
          <div className="row gx-4 gy-sm-5 gy-4 align-items-center">
            <div className="col-lg-3 col-6 col-xxs-12">
              <a href="/"><img src="/assets/img/logo-white.svg" alt="logo" className="logo" /></a>
            </div>
            <div className="col-lg-6 order-lg-1 order-2">
              {/* nwsltr */}
              <form action="#" className="jo-footer-top__nwsltr">
                <input type="email" name="jo-nwsltr-email" id="jo-nwsltr-email" placeholder="Email Address" />
                <button className="jo-btn" type="submit">Get Newsletter</button>
              </form>
            </div>
            {/* socials */}
            <div className="col-lg-3 col-6 col-xxs-12 order-lg-2 order-1">
              <div className="tt-footer-top__socials jo-footer-top__socials justify-content-start justify-content-sm-end">
                <a href="#"><i className="flaticon-facebook-1"></i></a>
                <a href="#"><i className="flaticon-twitter"></i></a>
                <a href="#"><i className="flaticon-social-media"></i></a>
                <a href="#"><i className="flaticon-youtube-1"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* footer middle */}
        <div className="jo-footer-middle">
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <div className="jo-footer-widget jo-footer-contact">
                <h5 className="jo-footer-widget__title">Get in Touch</h5>
                <a href="mailto:contact.me@gmail.com">contact.me@gmail.com</a>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="jo-footer-widget jo-footer-links">
                <h5 className="jo-footer-widget__title">Browse Categories</h5>
                <div className="links">
                  <a href="#">Music</a>
                  <a href="#">Sports</a>
                  <a href="#">Gaming</a>
                  <a href="#">Fashion</a>
                  <a href="#">Art</a>
                  <a href="#">Photography</a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="jo-footer-widget jo-footer-gallery">
                <h5 className="jo-footer-widget__title">Instagram feed</h5>
                <div className="imgs flex-wrap">
                  <img src="/assets/img/footer-img-1.jpg" alt="Footer Image" />
                  <img src="/assets/img/footer-img-2.jpg" alt="Footer Image" />
                  <img src="/assets/img/footer-img-3.jpg" alt="Footer Image" />
                  <img src="/assets/img/footer-img-4.jpg" alt="Footer Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="tt-footer-bottom text-center">
          <p className="mb-0">Copyright ©2024 Developed by&nbsp;Influtics</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;