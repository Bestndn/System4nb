import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme, Divider, IconButton, InputLabel, Paper } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import Map from '../../map'
import React from 'react'


export default function Mainreport() {

    const edittextfileld1 = {
        fontFamily: 'Kanit',
    }
    const Searchbutton = styled(Button)({
        padding: '0.8%',
        fontFamily: 'kanit',
        width: '155px',
        border: '1px solid #2F4266',
        borderRadius: '8px', 
        backgroundColor: '#2F4266', 
        color: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#fff',
        color: '#2F4266',
        transform: 'scale(1.02)'
        },
      });

  return (
    <div>
        <Box> 
            <Grid container sx= {{height: '800px'}}>
                <Grid item xs={5.5} 
                sx= {{
                    backgroundColor: '#fff', 
                    borderRight: '1px solid',
                    background: 'url(/report.png) no-repeat bottom' 
                    }}
                    >
                    <Grid container direction= "column" sx= {{alignItems: 'center'}}>
                        <Grid sx= {{backgroundColor: '#00A09D', borderRadius: '5px', mt: 5}}>
                            <Typography variant='h6' fontWeight= "bold" className= {styles.kanit} sx= {{px: 2, color: '#fff'}}>
                                รายงาน
                            </Typography>
                        </Grid>
                        <Grid container sx>
                            
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={6.5}>
                    <Grid container sx= {{justifyContent: 'center', alignItems: 'center',height: '100%'}}> 
                        <Grid sx= {{width: '98%', height: '98%' , border: '1px solid',backgroundColor: '#fff', overflow: 'hidden'}}>
                            <Map/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
