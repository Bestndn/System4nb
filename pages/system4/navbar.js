import * as React from 'react';
import {Box, Grid, Typography, ButtonBase, Button, Collapse, Divider, Stack } from '@mui/material';
import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import Userr from './user'
import Search from './search'



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

//   const [open1, setOpen1] = React.useState(true);
//   const [open2, setOpen2] = React.useState(false);
//   const [open22, setOpen22] = React.useState(false);
//   const [open3, setOpen3] = React.useState(false);

//   const OpenSearch = () => {
//     setOpen1(true);
//     setOpen2(false);
//     setOpen3(false);
//     setOpen22(false);
//   }

//   const OpenImport = () => {
//     setOpen2(true);
//     setOpen1(false);
//     setOpen3(false);
//     setOpen22(false);
//   }

//   const OpenImport2 = () => {
//     setOpen22(true);
//     setOpen1(false);
//     setOpen2(false);
//   }




  return (
    <div>
        <Box sx={{ minWidth: '1200px' }}>
            <Grid container sx={{bgcolor: '#2F4266', padding: '0.2%' }}></Grid>

            <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between',padding: '0.2%' }}>

                <Image src="/Comu.png" alt="sdda" width={300} height={76} />
                <Typography variant='text' className={styles.kanit} 
                sx={{ color: '#2F4266', fontSize: 'x-large', fontWeight: 'bold'}}>
                  ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
                </Typography>

                <Userr/>
            </Grid>
            
            <Grid container sx={{bgcolor: '#2F4266', boxShadow: `6px 6px 9px rgba(0, 0, 0, 0.25)` }}>
                <Grid sx={{
                  display: 'flex',
                  width: '6.5%', 
                  bgcolor: '#B8B8B85E', 
                  justifyContent: 'center', 
                  ml: '5%', 
                  padding: '0.9%'
                }}>
                  <ButtonBase disabled>
                    <Typography variant="text" className={styles.kanit} sx={{
                    color: 'white', 
                    fontWeight: '600',
                    fontSize: '18px',
                    '&:hover': {bgcolor: '#B8B8B85E'}
                    }}>หน้าหลัก</Typography>
                  </ButtonBase>
                </Grid>

                {/* <Stack spacing={10} direction="row" sx={{ ml: 10 }}>
                  <Button variant="text" className={styles.kanu} onClick={OpenSearch}>นำเข้าไฟล์ shp,kmz</Button>
                  <Button variant="text" className={styles.kanu} onClick={OpenImport}>เทียบเคียง</Button>
                  <Button variant="text" className={styles.kanu} >รายงาน</Button>
                </Stack> */}
            </Grid>
        </Box>





        <Grid sx={{ 
          position: 'absolute', 
          width: '70%',  
          zIndex: 200, 
          top: 170,
          left: 10
          }}>
            <Search/>
        </Grid>
        {/* { open1 ?
        <Grid sx={{ 
          position: 'absolute', 
          width: '70%',  
          zIndex: 200, 
          top: 170,
          left: 10
          }}>
            <Search4n onClick={OpenImport}/>
        </Grid>
        : null }

        { open2 ?
        <Grid sx={{ 
          position: 'absolute', 
          width: '70%',  
          zIndex: 200, 
          top: '30%',
          left: '30%',
          }}>
            <Import onClick={OpenImport2}/>
        </Grid>
        : null }


        { open22 ?
        <Grid sx={{ 
          position: 'absolute', 
          width: '70%',  
          zIndex: 200, 
          top: 170,
          left: 10
          }}>
            <Contrast/>
        </Grid>
        : null } */}


       

    </div>
  );
}