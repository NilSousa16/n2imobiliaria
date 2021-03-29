/*
Support link: 
  https://betterprogramming.pub/making-a-basic-header-responsive-with-materialui-and-react-2198fac923c8

  https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb

  https://reactgo.com/material-ui-react-tutorial/

  https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/components/Toolbar/Toolbar.js
*/

import React, { useState, useEffect } from 'react';

import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link,
  MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link as RouterLink } from "react-router-dom";

// import { Top } from './styled';

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Detalhes",
    href: "/details",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",    
    // paddingLeft será 0 quando a tela for menor que 900px
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },

  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  drawerContainer: {
    padding: "20px 30px",
  }

}));

const Header: React.FC = () => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar} >
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }))
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
        <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            { getDrawerChoices() }
          </div>
        </Drawer>
        <div>
          { femmecubatorLogo }
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      N2 Imobiliária
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (    
    <header>
      <AppBar className={header}>
        { mobileView ? displayMobile() : displayDesktop() }
      </AppBar>
    </header>
  );
};

export default Header;