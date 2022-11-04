import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Toolbar, List, CssBaseline, 
         Typography, Divider, IconButton, 
         Collapse, ListItem, ListItemButton, 
         ListItemIcon, ListItemText,  Grid
       } from '@mui/material/';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../styles/Home.module.css';
import { BsFolderX } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";
import { SlHome } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Userr from './user';
import Map from './map'

import Import from './import'







const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#00A09D',
  color: '#fff'
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#00A09D',
  color: '#fff',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [show1, setShow1] = React.useState(true);
  const [show2, setShow2] = React.useState(false);

  const handleClick = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    setOpen1(true);
    setOpen2(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  };

  const ListButton = styled(ListItemButton)({
    marginLeft: '5%',
    width: '90%',
    borderRadius: '10px',
    '&:hover': {
    backgroundColor: '#578AA8',
    color: '#fff',
    transform: 'scale(1.02)'
    },
  });
  

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline/>
      <AppBar open={open}
      sx= {{
        boxShadow: '0px 0px 0px',
        backgroundImage: 'url(/Navv.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        position: 'fixed',
      }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container sx= {{alignItems: 'center', justifyContent: 'space-between', minwidth: '1440px'}}>
            <Image src="/Comu.png" alt="sdda" width={300} height={80}/>
            <Typography variant="h5" noWrap className= {styles.kanit1} 
            sx= {{color: '#fff', 
                  fontWeight: 'bold', 
                  display: {xs: "none", lg: "block"}
            }} 
            component="div"
            >
              ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
            <Grid sx= {{display: {xs: "none", lg: "block"}}} >
              <Userr/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx= {{position: 'static'}}>
      <DrawerHeader sx= {{position: 'static'}}>
          <IconButton onClick={handleDrawerClose} 
          sx= {{color: '#fff',
            '&:hover': {
            backgroundColor: '#578AA8',
            color: '#fff',
            transform: 'scale(1.02)'
            },}}
            >
            {theme.direction === 'rtl' ? <CiSquareChevLeft size= {30} /> : <CiSquareChevLeft size= {30} />}
          </IconButton>
        </DrawerHeader>
        <Divider variant='middle' sx= {{backgroundColor: '#fff'}}/>
        <List sx= {{position: 'static'}}>
          {['หน้าหลัก'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  my: 2
                }}
                onClick= {() => {setShow1(false); setShow2(true);}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {index % 2 === 0 ? <SlHome size= {25} /> : <SlHome size= {25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
              </ListButton>
            </ListItem>
          ))}
          {['ส่วนกรรมสิทธิ์ที่ดิน'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListButton onClick={handleClick}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  my: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {index % 2 === 0 ? <BsFolder2Open size= {25} /> : <BsFolder2Open size= {25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
              </ListButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListButton sx={{ pl: 4 }}>
                <ListItemText primary="• ส่วนกรรมสิทธิ์ที่ดิน" classes= {{primary:styles.kanit}}/>
                </ListButton>
                </List>
                </Collapse>
            </ListItem>
          ))}
          {['จัดการการบุกรุกพื้นที่'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListButton onClick={handleClick2}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  my: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {index % 2 === 0 ? <BsFolderX size= {25} /> : <BsFolderX size= {25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
              </ListButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <ListButton sx={{ pl: 4 }}>
                  <ListItemText primary="• รายงานการบุกรุกพื้นที่" classes= {{primary:styles.kanit}}/>
                  </ListButton>
                  </List>
                </Collapse>
            </ListItem>
          ))}
          {['บริการประชาชน'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  my: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {index % 2 === 0 ? <HiOutlineUser size= {25} /> : <HiOutlineUser size= {25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
              </ListButton>
            </ListItem>
          ))}
          {['จัดการสิทธิ'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  my: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {index % 2 === 0 ? <HiOutlineUsers size= {25} /> : <HiOutlineUsers size= {25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} classes= {{primary:styles.kanit}}/>
              </ListButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1,}}>
        <DrawerHeader />
        {show1?<Map/>:null}
        {show2?<Import/>:null}
      </Box>
    </Box>
  );
}

