import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../../styles/system4v2.module.css';
import { styled } from '@mui/material/styles';
import { BsFileEarmarkBarGraph } from "react-icons/bs";

const theme = createTheme();

export default function Report() {

  const Iconavatar = styled(Avatar)({
    overflow: 'hidden', 
    width: 60, 
    height: 60, 
    marginTop: '', 
    marginLeft: '-22px', 
    border: '2px solid #8AD2B0', 
    backgroundColor: '#fff', 
    color:'#8AD2B0'
  });

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: 800 }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <Grid container direction= "column" sx= {{alignItems: 'center' }}>
                        <Grid sx= {{backgroundColor: '#00A09D', borderRadius: '5px', mt: 5}}>
                            <Typography variant='h6' fontWeight= "bold" className= {styles.kanit} sx= {{px: 3, color: '#fff'}}>
                                รายงาน
                            </Typography>
                        </Grid>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '90%', 
                                height: '50px',
                                mt: '50px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานบัญชีการประเมินราคาที่ดินไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '90%', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปจำนวนแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน ประจำรายเดือน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '90%', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                    รายงานการเทียบเคียงแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '90%', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง 
                                        จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '90%', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปผลการดำเนินงานระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                    </Grid>

        </Grid>




        <Grid item xs={false} sm={4} md={6} sx={{ width: '100%' }}
        >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929615.196018716!2d92.43077059157704!3d12.903464108699563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1665041235384!5m2!1sth!2sth"
        width="100%"
        height={800}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
        </Grid>
      </Grid>


    </ThemeProvider>
    </div>
  );
}