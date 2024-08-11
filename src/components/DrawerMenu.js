import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: '#333', // Optional: Dark background for the drawer
    color: '#fff',
    height: '100%' // Set the text color to white
  },
  listItemText: {
    color: '#fff', // Set the text color to white
  },
});

const DrawerMenu = ({ isOpen, toggleDrawer }) => {
  const classes = useStyles();

  const pages = [
    { text: 'Home', path: '/' },
    { text: 'About Me', path: '/about-me' },
    { text: 'My Education', path: '/my-education' },
    { text: 'My Work Experience', path: '/my-work-experience' },
    { text: 'My Projects', path: '/my-projects' },
  ];

  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
      <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          {pages.map((page) => (
            <ListItem button key={page.text} component={Link} to={page.path}>
              <ListItemText primary={page.text} classes={{ primary: classes.listItemText }} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
