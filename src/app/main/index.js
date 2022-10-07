import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import "./index.css"
import Homepage from './Homepage';
import { Button, InputAdornment, TextField } from '@mui/material';
import { auth } from "../../utils/firebase/firebase.config";
import _nav from "../layouts/_nav"
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "./profile/profile.css"


const drawerWidth = 300;
const drawerWidth2 = 240;

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <Toolbar />
      <List className='sidebar' >
        {_nav.map((item, index) => (
          <ListItem key={index}  >
            <Link to={item.to}>
              <ListItemButton props={item} onClick={() => item.fn()}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>

        ))}
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleLogout = () => {
    auth.signOut()
    navigate("/")
  }
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`, md: "100%" },
          ml: { sm: `${drawerWidth}px`, md: "0" }, backgroundColor: "#ffffff"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "blue" }}
          >
            <MenuIcon />
          </IconButton>
          <img
            className="instagramLogo"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram"
          />
          <TextField
            id="serach"
            label="Search"
            size="small"
            className='search-input'
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
            }}
          />
          <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth2 }
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor: "red"
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Homepage />
        </Box>
      </Box>
    </>);
}

Main.propTypes = {
  window: PropTypes.func,
};

export default (Main);
