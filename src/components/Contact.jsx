import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Contact() {
  const partners = [
    { id: 1, image: '/assets/img/partner-1.png', alt: 'Partner Image' },
    { id: 2, image: '/assets/img/partner-2.png', alt: 'Partner Image' },
    { id: 3, image: '/assets/img/partner-3.png', alt: 'Partner Image' },
    { id: 4, image: '/assets/img/partner-4.png', alt: 'Partner Image' },
    { id: 5, image: '/assets/img/partner-1.png', alt: 'Partner Image' },
    { id: 6, image: '/assets/img/partner-2.png', alt: 'Partner Image' }
  ];

  return (
    <section className="jo-contact">
      <div className="top">
        <div className="jo-container">
          <div className="row align-items-end">
            {/* contact form */}
            <div className="col-lg-6">
              <div className="jo-contact-form-wrapper">
                <img src="/assets/img/contact-form-icon.svg" alt="icon" className="icon" />
                <h2 className="jo-section-title">Let's Work Together on your next Project</h2>
                <p>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum</p>
                <form action="#" className="jo-contact-form">
                  <div className="form-group">
                    <label htmlFor="jo-contact-name">Your Name</label>
                    <input type="text" name="name" id="jo-contact-name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="jo-contact-email">Your Email Address</label>
                    <input type="email" name="email" id="jo-contact-email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="jo-contact-message">Write Message</label>
                    <textarea name="message" id="jo-contact-message"></textarea>
                  </div>

                  <button type="submit" className="jo-btn">Send Message</button>
                </form>
              </div>
            </div>

            {/* img */}
            <div className="col-lg-6 d-lg-block d-none">
              <div className="jo-contact__img">
                <img src="/assets/img/contact-img.png" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="jo-container overflow-hidden">
          <div className="row gx-5">
            <div className="col-lg-6 blank-space d-none d-lg-block"></div>

            <div className="col-lg-6">
              <h5 className="jo-partners-title">Trusted Partners</h5>
              <div className="jo-partners-slider">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={3}
                  pagination={{
                    el: '.jo-partners-slider-pagination',
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {partners.map((partner) => (
                    <SwiperSlide key={partner.id}>
                      <img src={partner.image} alt={partner.alt} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="jo-partners-slider-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;