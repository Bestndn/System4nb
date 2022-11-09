import React from 'react'
import {Box, Grid, Typography, ButtonBase, Button, Collapse, Divider, Stack, Avatar } from '@mui/material';
import { FaHome } from "react-icons/fa";
import { HiDocumentSearch, HiDatabase, HiDocumentReport } from "react-icons/hi";
import { GiScales } from "react-icons/gi";
import styles from '../../styles/Home.module.css';

export default function Boxeiei() {

    const [open1, setOpen1] = React.useState(true);

    
  return (
    <div>
        
        { open1 ?
        <Box sx={{ 
          position: 'absolute', 
          zIndex: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          top: 300,
          p: '1%',
          }}>
            <Grid sx={{ 
              width: '1000px', 
              bgcolor: 'white', 
              p: 0.2, 
              pb: 0.5, 
              pl: 0.5, 
              pr: 0.5, 
              borderRadius: '10px',
              }}>
              <Grid sx={{ 
                bgcolor: '#2F4266', 
                p: '2%', 
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
              }}>
                <Typography variant="text" className={styles.kanit} sx={{ color: 'white' }}>
                  เลือกรายการ
                </Typography>
              </Grid>

              <Stack spacing={1} direction="row" sx={{ mt: 0.5 }}>
                <Button variant="contained" sx={{ width: 210, height: 300, bgcolor: '#2F426670' }}>
                  <Avatar sx={{ width: 120, height: 120, border: '5px solid #2F4266', bgcolor: 'white', color: '#2F4266'}}>
                    <FaHome size={100}/>
                  </Avatar>
                </Button>
                <Button variant="contained" sx={{ width: 210, height: 300}}>
                  <Avatar >
                    <FaHome />
                  </Avatar>
                </Button>
                <Button variant="contained" sx={{ width: 210, height: 300}}>
                  <Avatar >
                    <FaHome />
                  </Avatar>
                </Button>
                <Button variant="contained" sx={{ width: 210, height: 300}}>
                  <Avatar >
                    <FaHome />
                  </Avatar>
                </Button>
                <Button variant="contained" sx={{ width: 210, height: 300}}>
                  <Avatar >
                    <FaHome />
                  </Avatar>
                </Button>
              </Stack>
            </Grid>
        </Box>
        : null }
        
        </div>
  )
}
