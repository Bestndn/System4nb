import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image'
import Userr from '../User'
import { Grid } from '@mui/material';


export default function indexNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
      sx= {{
        height: '90px',
        backgroundImage: 'url(/Nav2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      >
        <Toolbar container sx= {{height: '90px', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image src="/Comu.png" alt="sdda" width={300} height={76} />
            <Typography variant='h5' className= {styles.kanit1} sx= {{color: '#fff', fontWeight: 'bold'}}>
                ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
            <Userr/>    
        </Toolbar>
      </AppBar>
    </Box>
  );
}

