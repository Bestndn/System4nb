import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Image from 'next/image'

import styles from '../../styles/Home.module.css'

export default function Test() {
    const [modalNor, setModalNor] = React.useState(true);
  return (
    <div>
        <Modal
        open={modalNor}
        onClose={() => { setModalNor(false); }}
      >
        <Box sx={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
        <div>
        <Box 
        sx={{
        bgcolor: '#fff', 
        width: '750px', 
        boxShadow : '2px -3px 14px rgba(0, 0, 0, 0.25)', 
        borderRadius: '10px',
        p: '1%'
        }}
        >
        <Grid container sx= {{justifyContent: 'center', alignItems: 'center', py: '2%', pl: '2%', pr: '2%'}}>
        <Image src="/stopp.png" alt="stopp.jpg" width={80} height={80} />
        <Grid container sx= {{justifyContent: 'center', mt: '3%' }}>
          <Typography variant= "text" className= {styles.kanit} sx= {{ color: '#000', ml: -4}}>
          ไม่ปรากฏข้อมูล น.ส. 3ก. ดังกล่าวในบัญชีราคาประเมินที่ดิน 
          </Typography>
          <Typography variant= "text" className= {styles.kanit} sx= {{fontWeight: 'bold', color: 'red', textDecoration: 'underline red'}}>
          แบบเรียงเลขที่ น.ส. 3ก.
          </Typography>
          
        </Grid>

        <Grid sx={{ mt: 0.2 }}>
        <Typography variant= "text" className= {styles.kanit} sx= {{ color: '#000' }}>
        ทั้งนี้ขอให้ค้นหาข้อมูลด้วยระวางภูมิประเทศ ระวางยูทีเอ็ม มาตราส่วน แผ่นที่ระวางยูทีเอ็ม
        และเลขที่ดิน 
          </Typography>

          <Typography variant= "text" className= {styles.kanit} sx= {{ color: '#000'}}>เนื่องจากแปลงที่ดินดังกล่าวอาจจะประกาศในบัญชีราคาประเมินที่ดิน
          </Typography>

          <Typography variant= "text" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#000', textDecoration: 'underline #000'}}>
          แบบเรียงเลขที่ดิน
          </Typography>
        </Grid>


                
        <Grid container sx= {{justifyContent: 'space-evenly', mt: '5%'}}>
          <Button variant= "contained" onClick={() => { setModalNor(false); }} 
          sx={{ 
                  borderRadius: '10px', 
                  borderRadius: '10px', 
                  width: '100px', 
                  height: '35px', 
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
          }}>ปิด</Button>
        </Grid>
        </Grid>
        </Box>
        </div>
        </Box>
      </Modal>
    </div>
  )
}
