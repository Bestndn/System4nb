import * as React from 'react';
import {Box, Grid, Typography, ButtonBase, Button, Collapse, Divider, Stack, Avatar } from '@mui/material';
import styles from '../../../styles/Main.module.css';
import Image from 'next/image'
import Userr from './user'

import { FaHome } from "react-icons/fa";
import { HiDocumentSearch, HiDatabase, HiDocumentReport } from "react-icons/hi";
import { GiScales } from "react-icons/gi";

import Search from '../search/search'
import Import from '../import/alertimport'


export default function Navbar() {
  
  // ส่วนของ user menu dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  // ส่วนปิดของ user menu dropdown

  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  return (
    <div>
        <Box sx={{ minWidth: '1200px' }}>
            <Grid container sx={{bgcolor: '#2F4266', padding: '0.2%' }}></Grid>

            <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between',padding: '1%' }}>

                <Image src="/Comu.png" alt="sdda" width={`300px`} height={'76px'} />
                <Typography variant='text' className={styles.kanit} 
                sx={{ color: '#2F4266', fontSize: 'x-large', fontWeight: 'bold'}}>
                  ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
                </Typography>

                <Userr/>
            </Grid>
            
            <Grid container sx={{bgcolor: '#2F4266', boxShadow: `6px 6px 9px rgba(0, 0, 0, 0.25)`, p: '1%' }}>
                <Stack spacing={12} direction="row" sx={{ ml: 10 }}>
                  <Button variant="text" className={styles.kanu} >หน้าหลัก</Button>
                  <Button variant="text" className={styles.kanu} >ค้นหา</Button>
                  <Button variant="text" className={styles.kanu} >นำเข้า</Button>
                  <Button variant="text" className={styles.kanu} >เทียบเคียง</Button>
                  <Button variant="text" className={styles.kanu} >รายงาน</Button>
                </Stack>
            </Grid>
        </Box>

        
        
        { open1 ?
        <Box sx={{ 
          position: 'absolute', 
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          p: '1%',
          }}>
        <Search />
        </Box>
        : null }
        


    </div>
  );
}