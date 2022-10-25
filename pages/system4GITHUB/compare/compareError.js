import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styles from '../../../styles/Home.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';



export default function Inputalert(props) {

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
                <CancelRoundedIcon sx= {{ width: '146px', height: '146px', color: '#E64D3B' }}/>
            </Grid>
            <Grid container sx= {{justifyContent: 'center', pt: '1%'}}>
                <Grid>
                <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
                ไม่ปรากฏแปลงที่ดินใกล้เคียงที่มี
                </Typography>
                </Grid>
            </Grid>
            <Grid container sx= {{justifyContent: 'center'}}>
                <Grid>
                <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
                สภาพคล้ายคลึงกัน
                </Typography>
                </Grid>
            </Grid>
              
            <Grid container sx= {{justifyContent: 'space-evenly', py: '5%'}}>
                <Inputbutton variant= "contained" onClick = {props.onClose}>
                  ปิด
                </Inputbutton>
            </Grid>
            
            <Grid container sx= {{justifyContent: 'center', pb: '3%'}}>
                <Grid>
                <Typography variant= "h6" className= {styles.kanit} 
                sx= {{fontWeight: 'bold', color: '#F24E1E', textDecoration: 'underline #F24E1E'}}>
                *ขอให้แจ้งกรมธนารักษ์เพื่อกำหนดราคาประเมินที่ดิน
                </Typography>
                </Grid>
            </Grid>
       </BBox>
       
    </div>
  )
}