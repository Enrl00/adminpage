import * as React from 'react';
import {Link} from "react-router-dom";
import{
        AppBar,
        CssBaseline,
        Divider, 
        Drawer,
        IconButton,
        List,
        ListItem,
        ListItemButton,
        ListItemIcon, 
        ListItemText, 
        Toolbar,
        Typography,} from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../sources/Logo.png';
import graphic from '../sources/graphic.svg';
import order from '../sources/order.svg';
import menu from '../sources/menu.svg'
const drawerWidth = 240;
const pathname = window.location.pathname.split('/',2)


export const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:'rgb(0,7,35)', height:'100vh'}}>
      <Toolbar style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'1vh'}}>
        <img src={logo} height={'80%'} width={'80%'} alt=''/>
      </Toolbar>
      <Divider />
      <List>
        {['Order', 'Graphics', 'Menu'].map((text, index) => (
          <Link to={`/${text}`} style={{textDecoration:'none', color:'white'}} > 
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  {index === 1 ? <img src={graphic} alt=''></img> : index === 2 ? <img src={menu} alt=''></img> : <img src={order} alt=''></img>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['Гарах'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component="div">
          {pathname}
          </Typography>
        </Toolbar>
      </AppBar>
    
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
