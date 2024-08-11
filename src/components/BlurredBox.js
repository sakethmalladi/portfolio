import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BlurredBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '80%',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  backdropFilter: 'blur(10px)', // Blur effect
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
  transform: 'translateX(-100%)', // Start off-screen to the left
  animation: 'slideIn 1s forwards', // Animation
  '@keyframes slideIn': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
}));

const BlurredBoxComponent = () => {
  return (
    <BlurredBox>
      <Typography variant="h4" component="div">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" component="div">
        Here you can find information about my education, work experience, and projects.
      </Typography>
    </BlurredBox>
  );
};

export default BlurredBoxComponent;
