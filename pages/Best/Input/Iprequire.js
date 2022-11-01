import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import React from 'react'


export default function Inputrequire(){
    
    const Inputbutton = styled(Button)({
        marginBottom: '5%',
        width: '25%',
        borderRadius: '10px', 
        backgroundColor: '#2F4266', 
        boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: [
            'kanit',
          ].join(','),
          '&:hover': {
            backgroundColor: '#fff',
            color: '#2F4266',
            transform: 'scale(1.02)'
          },
      });
    const Typographytext = styled(Typography)({
        fontFamily: 'kanit',
        color: 'black'
      });
    
  return (
    <div>
        <Box sx= {{position: 'absolute', width: '100%', height: '80%', minWidth: '1200px', minHeight: '600px', zIndex: '200'}}>
            <Grid container sx= {{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Grid  sx= {{borderRadius: '10px', width: '546px', borderRight: '10px', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)'}}>
                <Grid container sx= {{backgroundColor: '#DA3232', borderRadius: '10px 10px 0px 0px', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                    <Typography variant='text' color= '#fff' className= {styles.kanit}>
                        ข้อกำหนดในการนำเข้า
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'center', backgroundColor: '#D9D9D9'}}>
                    <Grid container sx= {{width: '90%', my: '5%'}}>
                        
                        <Grid container sx= {{mb: '2%'}}>
                        <Typographytext variant='text' className= {styles.kanit}>
                        •  กรณีนำเข้ารูปแปลง (shp,kmz) ต้องได้รับจาก 
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            กรมที่ดิน
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit}>
                            เท่านั้น
                        </Typographytext>
                    </Grid>
                    <Grid container sx= {{mb: '2%'}}>
                        <Typographytext variant='text' className= {styles.kanit} >
                        •  พิกัดรูปแปลง ต้องเป็น
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            Indian 1975 Zone 47,Zone 48 
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit} >
                            เท่านั้น
                        </Typographytext>
                    </Grid>
                    <Grid container sx= {{mb: '2%'}}>
                        <Typographytext variant='text' className= {styles.kanit}>
                        •  นำเข้าข้อมูลรูปแปลงได้ 
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            ไม่เกิน
                        </Typographytext>
                        <Typographytext variant='text' className= {styles.kanit}>
                            20 แปลง
                        </Typographytext>
                    </Grid>
                    
                    </Grid>

                    <Inputbutton variant= "contained">
                        นำเข้า
                    </Inputbutton>
                </Grid>
            </Grid>
            </Grid>
         </Box>
    </div>
  )
}
