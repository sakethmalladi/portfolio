import { createTheme } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
  palette: {
    text: {
      primary: '#333', // Primary text color
    },
    background: {
      default: '#f5f5f5', // Background color
    },
  },
  shape: {
    borderRadius: 8, // Border radius for components
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font family
  },
});

export default theme;
