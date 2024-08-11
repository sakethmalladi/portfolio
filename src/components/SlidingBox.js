// src/components/SlidingBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SlidingBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%', // Center vertically
  left: '50%', // Center horizontally
  transform: 'translate(-50%, -50%)', // Center by offsetting half of its width and height
  width: '80%', // Adjust width as needed
  height: 'auto',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  backdropFilter: 'blur(10px)', // Apply blur effect
  borderRadius: theme.shape.borderRadius,
  opacity: 0,
  transform: 'translateX(-100%)', // Start off-screen to the left
  animation: 'slideIn 1s 0.5s forwards', // Animation with delay
  '@keyframes slideIn': {
    '0%': { transform: 'translateX(-100%)', opacity: 0 },
    '100%': { transform: 'translate(-50%, -50%)', opacity: 1 }, // Slightly offset left
  },
}));

const SlidingBox = () => {
  return (
    <SlidingBoxContainer>
      <Typography variant="h4" component="div" color="#333" align="center">
        About Me
      </Typography>
      <Typography variant="body1" color="#333" align="center" mt={2}>
        I'm Saketh Malladi, a passionate developer with experience in front-end technologies, backend development, and more. I love creating interactive and user-friendly web applications that solve real-world problems.
        I am a skilled Software Engineer with over 3 years of proven experience in developing robust and high-scale software solutions. My expertise spans across Java, Python, Spring Boot, React.js, and SQL, enabling me to build comprehensive full-stack applications efficiently. I have a deep understanding of microservices architecture, allowing me to design and implement scalable and maintainable systems. My experience in database management ensures that I can handle complex data structures and optimize performance. Additionally, I am well-versed in AWS Cloud environments, which enhances my ability to deploy and manage applications in scalable and secure cloud infrastructures.
      </Typography>
    </SlidingBoxContainer>
  );
};

export default SlidingBox;
