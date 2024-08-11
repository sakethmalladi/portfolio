import React from 'react';
import BlurredBoxComponent from '../components/BlurredBox';
import SlidingImageComponent from '../components/SlidingImage';

const Home = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <BlurredBoxComponent />
      <SlidingImageComponent />
      {/* Other content for the Home page can go here */}
    </div>
  );
};

export default Home;
