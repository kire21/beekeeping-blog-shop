import React, { useState } from 'react';
import Link from 'next/link';

import { AppBar, Toolbar, Container, Avatar, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';

import classes from './main-navigation.module.css';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/posts' },
  { name: 'Contact Us', href: '/contact' },
];

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar className={classes.nav} position='sticky'>
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          <Avatar className={classes.nav__logo} src='/logo.svg' alt='logo' />
          <Hidden smDown>
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  style={{ textDecoration: 'none' }}
                  className={classes.link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor='right'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>

        <Divider />
        <List>
          {navigationLinks.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link
                  style={{ textDecoration: 'none' }}
                  className={classes.link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default MainNavigation;
