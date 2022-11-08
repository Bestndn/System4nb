import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import styles from '../../../styles/Home.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';



export default function Inputalert() {

    const BBox = styled(Box)({
        backgroundColor: '#fff', 
        width: '650px', 
        boxShadow : '2px -3px 14px rgba(0, 0, 0, 0.25)', 
        margin: '5%', 
        borderRadius: '10px'
      });

    const Inputbutton = styled(Button)({
        borderRadius: '10px', 
        width: '130px', 
        height: '45px', 
        backgroundColor: '#F24E1E', 
        color: '#fff', 
        boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
        fontWeight: 'bold',
        fontFamily: [
            'kanit',
          ].join(','),
          '&:hover': {
            border: '1px solid #F24E1E',
            backgroundColor: '#fff',
            color: '#F24E1E',
            transform: 'scale(1.02)'
          },
      });

  return (
    <div>
        <BBox>
            <Grid container sx= {{justifyContent: 'center', alignItems: 'center', pt: '5%'}}>
                <NotificationImportantRoundedIcon sx= {{ width: '102px', height: '102px', color: '#F24E1E' }}/>
            </Grid>
            <Grid container sx= {{justifyContent: 'center', pt: '5%'}}>
                <Grid>
                <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
                ปรากฏขัอมูลในบัญชีราคาประเมินที่ดิน
                </Typography>
                </Grid>
            </Grid>
            <Grid container sx= {{justifyContent: 'center'}}>
                <Grid>
                <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
                แปลงนี้ไม่สามารถนำเข้าได้
                </Typography>
                </Grid>
            </Grid>
              
              <Grid container sx= {{justifyContent: 'space-evenly', py: '5%'}}>
                <Inputbutton variant= "contained">
                  ปิด
                </Inputbutton>
              </Grid>
    
       </BBox>
       
    </div>
  )
}
