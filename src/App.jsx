// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import VideoReels from './components/VideoReels';
import Services from './components/Services';
import About from './components/About';
import UpcomingLives from './components/UpcomingLives';
import PremiumVideos from './components/PremiumVideos';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Footer from './components/Footer';

import '@splidejs/react-splide/css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <main>
        <Hero />
        <SocialLinks />
        <VideoReels />
        <Services />
        <About />
        <UpcomingLives />
        <PremiumVideos />
        <Contact />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;