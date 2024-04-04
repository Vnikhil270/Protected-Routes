import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/navbar.scss";

import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Toolbar,
  IconButton,
  Drawer,
  Button,
} from "@mui/material/";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    navbtn: "Home",
    navLink: `/`,
  },
  {
    navbtn: "Dashboard",
    navLink: "/dashboard",
  },
  {
    navbtn: "Login",
    navLink: `/login`,
  },
  {
    navbtn: "Signup",
    navLink: `/signup`,
  },
];

function Navbar(props) {
  const window1 = props.window;
  const [mobileOpen, setMobileOpen] = useState(false);
  let navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              onClick={() => navLinkNavigation(item.navLink, item.navbtn)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.navbtn} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window1 !== undefined ? () => window1().document.body : undefined;

  const navLinkNavigation = (navLink, navbtn) => {
    navigate(navLink)
  };

  return (
    <div className={`Navbar ${props.register ? "nav-gray" : ""}`}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              background: "transparent",
              position: "relative",
              left: "auto",
              right: 0,
            }}
          >
            <Toolbar sx={{ justifyContent: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  textAlign: "center",
                }}
              >
                {navItems.map((item, key) => (
                  <Button
                    disableFocusRipple={true}
                    disableRipple={true}
                    key={key}
                    onClick={() => navLinkNavigation(item.navLink, item.navbtn)}
                    sx={{ color: "#fff" }}
                  >
                    {item.navbtn}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
