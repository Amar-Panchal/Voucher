/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import NavigationDrawer from "./NavigationDrawer";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const routesObject = [
  {
    id: 1,
    path: "/",
    label: "Dashboard",
    icon: <InboxIcon />,
    component: <Dashboard />,
  },
  {
    id: 2,
    path: "/home",
    label: "Home",
    icon: <InboxIcon />,
    component: <Home />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <InboxIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <InboxIcon />,
      },
    ],
  },
];

function AppRoutes() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  const DrawerHeader = styled("div")(({ theme }: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerClose}
              edge='start'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              My App
            </Typography>
          </Toolbar>
        </AppBar>
        <NavigationDrawer
          open={open}
          handleDrawerClose={handleDrawerClose}
          DrawerHeader={DrawerHeader}
          routesObject={routesObject}
          drawerWidth={drawerWidth}
        />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            {routesObject.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default AppRoutes;
