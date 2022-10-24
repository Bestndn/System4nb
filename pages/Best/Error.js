import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styles from '../../styles/Home.module.css';
import { styled } from '@mui/material/styles';


export default function Compelete() {

  const Backbutton = styled(Button)({
    borderRadius: '10px', 
    width: '130px', 
    height: '45px', 
    backgroundColor: '#EAB120', 
    color: '#fff', 
    boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        border: '1px solid #ECECEC',
        backgroundColor: '#fff',
        color: '#EAB120',
        boxShadow: '4px 4px 4px rgba(234,177,32)',
        transform: 'scale(1.02)'
      },
  });

  const Inputbutton = styled(Button)({
    borderRadius: '10px', 
    width: '130px', 
    height: '45px', 
    backgroundColor: '#2F4266', 
    color: '#fff', 
    boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        border: '1px solid #ECECEC',
        backgroundColor: '#fff',
        color: '#2F4266',
        boxShadow: '4px 4px 4px rgba(47, 66, 102)',
        transform: 'scale(1.02)'
      },
  });

  return (
    <div>
       <Box sx= {{bgcolor: '#fff', width: '650px', boxShadow : '2px -3px 14px rgba(0, 0, 0, 0.25)', mt: '5%', ml: '5%', borderRadius: '10px'}}>
            <Grid container sx= {{justifyContent: 'center', alignItems: 'center', py: '10%'}}>
                <CancelRoundedIcon sx= {{ width: '146px', height: '146px', color: '#E64D3B' }}/>
              <Grid container sx= {{justifyContent: 'center', mt: '3%'}}>
                <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
                  ไม่ปรากฏขัอมูลในบัญชีราคาประเมินที่ดิน
                </Typography>
              </Grid>
                
              <Grid container sx= {{justifyContent: 'space-evenly', mt: '5%'}}>
                <Backbutton variant= "contained">
                  กลับหน้าค้นหา
                </Backbutton>
                <Inputbutton variant= "contained">
                  นำเข้า
                </Inputbutton>
              </Grid>
            </Grid>
       </Box>
    </div>
  )
}