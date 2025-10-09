import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoReels from '../components/VideoReels';
import Services from '../components/Services';
import About from '../components/About';
import UpcomingLives from '../components/UpcomingLives';
import PremiumVideos from '../components/PremiumVideos';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoReels />
      <SocialLinks />
      <Services />
      <About />
      <UpcomingLives />
      <PremiumVideos />
      <Contact />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;
