import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';




export default function Warning(props){
    
    const Inputbutton = styled(Button)({
        marginBottom: '5%',
        width: '25%',
        borderRadius: '10px', 
        backgroundColor: '#2F4266', 
        fontWeight: 'bold',
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

    
    const [open, setOpen] = React.useState(true);
    

    
    
  return (
    <div>
        <Box>
            <Grid sx= {{m: '5%', borderRadius: '10px', width: '546px', borderRight: '10px', boxShadow: '4px 5px 18px rgba(0, 0, 0, 0.25)'}}>
                <Grid container sx= {{backgroundColor: '#DA3232', borderRadius: '10px 10px 0px 0px', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                    <Typography variant='text' color= '#fff' fontWeight= 'bold' className= {styles.kanit}>
                        ข้อกำหนดในการนำเข้า
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'center', backgroundColor: '#D9D9D9'}}>
                    <Grid container sx= {{width: '90%', my: '5%'}}>
                        
                        <Grid container sx= {{mb: '2%'}}>
                        <Typography variant='text' className= {styles.kanit}>
                        •  กรณีนำเข้ารูปแปลง (shp,kmz) ต้องได้รับจาก 
                        </Typography>
                        <Typography variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            กรมที่ดิน
                        </Typography>
                        <Typography variant='text' className= {styles.kanit}>
                            เท่านั้น
                        </Typography>
                    </Grid>
                    <Grid container sx= {{mb: '2%'}}>
                        <Typography variant='text' className= {styles.kanit} >
                        •  พิกัดรูปแปลง ต้องเป็น
                        </Typography>
                        <Typography variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            Indian 1975 Zone 47,Zone 48 
                        </Typography>
                        <Typography variant='text' className= {styles.kanit} >
                            เท่านั้น
                        </Typography>
                    </Grid>
                    <Grid container sx= {{mb: '2%'}}>
                        <Typography variant='text' className= {styles.kanit}>
                        •  นำเข้าได้ ไม่เกิน 100 แปลง
                        </Typography>
                        <Typography variant='text' className= {styles.kanit} sx= {{mx: '1%', fontWeight: 'bold'}}>
                            ไม่เกิน
                        </Typography>
                        <Typography variant='text' className= {styles.kanit}>
                            แปลง
                        </Typography>
                    </Grid>
                    
                    </Grid>

                    <Inputbutton variant= "contained" onClick={props.onClick}>
                        นำเข้า
                    </Inputbutton>
                </Grid>
            </Grid>
        </Box>



    </div>
  )
}