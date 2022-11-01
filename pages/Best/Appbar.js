import * as React from 'react';
import { Grid, IconButton, Button,Typography, Toolbar, Box, AppBar } from '@mui/material';
import Userr from '../system4/user'
import styles from '../../styles/Home.module.css';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import { Container } from '@mui/system';


export default function ButtonAppBar() {

    const Appbarbutton = styled(Button)({
        width: '100px',
        marginLeft: '2%',
        marginRight: '2%',
        fontWeight: 'bold',
        fontFamily: 'kanit',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px', 
        color: '#fff',
        '&:hover': {
        backgroundColor: '#fff',
        color: '#2F4266',
        transform: 'scale(1.1)'
        },
      });

  return (
    <Box sx={{height: '100vh' }}>
        <Grid container sx= {{height: '10px', backgroundColor: '#2F4266'}}></Grid>
        <Grid container sx= {{height: '90px', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image src="/Comu.png" alt="sdda" width={300} height={76} />
            <Typography variant='text' className={styles.kanit} 
            sx={{ color: '#2F4266', fontSize: 'x-large', fontWeight: 'bold'}}>
                  ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
                <Userr/>
        </Grid>
      <AppBar position="static" sx= {{backgroundColor: '#2F4266'}}>
        <Container maxWidth="xl">
            <Toolbar>
                <Box sx= {{display: 'flex', width: '100%'}}>
                    <Appbarbutton>
                        หน้าหลัก
                    </Appbarbutton>
                    <Appbarbutton>
                        ค้นหา
                    </Appbarbutton>
                    <Appbarbutton>
                        นำเข้า    
                    </Appbarbutton>
                    <Appbarbutton>
                        เทียบเคียง
                    </Appbarbutton>
                    <Appbarbutton>
                        รายงาน
                    </Appbarbutton>
                </Box>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
