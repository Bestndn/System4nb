import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import styles from '../../../styles/system4v2.module.css';
import { styled } from '@mui/material/styles';
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const theme = createTheme();

export default function Reportend() {

    const Changwatbutton = styled(Button)({
        backgroundColor: '#D2F8CE',
        border: '2px solid #8AD2B0', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: '373px', 
        height: '43px',
        marginTop: '20px',
        color: '#343232',
        justifyContent: 'flex-start',
        '&:hover': {
            backgroundColor: '#8AD2B0',
            color: '#fff',
            transform: 'scale(1.02)'
        },
      });
    const Iconavatar = styled(Avatar)({
        overflow: 'hidden', 
        width: 52, 
        height: 52, 
        marginLeft: '-28px', 
        border: '2px solid #519D9C', 
        backgroundColor: '#fff', 
        color:'#343232'
    });
    const Font = styled(Typography)({
        fontFamily: 'kanit',
        fontWeight: 'bold',
    });

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: 800 }}>
        <CssBaseline />

        <Grid container sx= {{justifyContent: 'center'}}>
            <Grid sx= {{
                width: '100%', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', 
                backgroundColor: '#FAC132',
                overflow: 'hidden'
                }}
                >
                <Grid container sx= {{justifyContent: 'flex-start', alignItems: 'center', my: 1}}>
                    <Avatar sx= {{width: 40, height: 40, mx: 1.5, border: '3px solid black', mt: 1}} >
                        <HiOutlineDocumentChartBar size={30} color= "black"/>
                    </Avatar>
                    <Grid sx= {{width: '92%'}}>
                        <Grid container sx= {{width: '100%'}}>
                            <Typography variant= "text" className= {styles.kanit} sx={{fontWeight: 'bold', color: '#fff', fontSize: '20px'}}>
                            รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Grid sx= {{backgroundColor: '#fff' }}>
            <Grid container sx= {{justifyContent: 'center'}}>
                <Grid container
                sx= {{
                    backgroundColor: '#00A09D',
                    borderRadius: '10px 10px 0px 0px',
                    width: '355px', 
                    height: '45px',
                    color: '#343232',
                    alignItems: 'center',
                    mt: 1
                }}
                >
                    <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 8.5}}>
                        <Typography variant='button' fontFamily= "kanit" fontWeight= "bold" color= "white">
                            จังหวัด
                        </Typography>
                        <Typography variant='button' fontFamily= "kanit" fontWeight= "bold" color= "white">
                            จำนวน(แปลง)
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Paper sx= {{backgroundColor: '#fff', overflowY: 'scroll' }}>
            <Grid container direction= "column" sx= {{alignItems: 'center'}}>
                <Button component= "Grid"
                    sx= {{
                        backgroundColor: '#07A80D',
                        border: '2px solid #8AD2B0',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                        width: '373px', 
                        height: '43px',
                        mt: '10px',
                        color: '#343232',
                        justifyContent: 'flex-start',
                        '&:hover': {
                            backgroundColor: '#8AD2B0',
                            color: '#fff',
                            transform: 'scale(1.02)'
                            },
                        }}
                        >
                        <Iconavatar>
                            <Typography variant='h4'>
                                1
                            </Typography>
                        </Iconavatar>
                            <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                                <Font variant='button'>
                                    กาญจนบุรี
                                </Font>
                                <Font variant='button'>
                                    9
                                </Font>
                            </Grid>
                </Button>
                <Button component= "Grid"
                    sx= {{
                        backgroundColor: '#41FB3E',
                        border: '2px solid #8AD2B0', 
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        width: '373px', 
                        height: '43px',
                        mt: '20px',
                        color: '#343232',
                        justifyContent: 'flex-start',
                        '&:hover': {
                            backgroundColor: '#8AD2B0',
                            color: '#fff',
                            transform: 'scale(1.02)'
                            },
                        }}
                        >
                        <Iconavatar justifyContent= "center">
                            <Typography variant='h4'>
                                2
                            </Typography>
                        </Iconavatar>
                            <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                                <Font variant='button'>
                                    กาญจนบุรี
                                </Font>
                                <Font variant='button'>
                                    9
                                </Font>
                            </Grid>
                </Button>
                <Button component= "Grid"
                    sx= {{
                        backgroundColor: '#9AFB91',
                        border: '2px solid #8AD2B0', 
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        width: '373px', 
                        height: '43px',
                        mt: '20px',
                        color: '#343232',
                        justifyContent: 'flex-start',
                        '&:hover': {
                            backgroundColor: '#8AD2B0',
                            color: '#fff',
                            transform: 'scale(1.02)'
                            },
                        }}
                        >
                        <Iconavatar justifyContent= "center">
                            <Typography variant='h4'>
                                3
                            </Typography>
                        </Iconavatar>
                            <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                                <Font variant='button'>
                                    กาญจนบุรี
                                </Font>
                                <Font variant='button'>
                                    9
                                </Font>
                            </Grid>
                </Button>

                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            4
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            5
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            6
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            7
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            8
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            9
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            10
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center">
                        <Typography variant='h4'>
                            11
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
                <Changwatbutton component= "Grid">
                    <Iconavatar justifyContent= "center" alignItems= "center">
                        <Typography variant='h4'>
                            12
                        </Typography>
                    </Iconavatar>
                        <Grid container sx= {{width: '75%', justifyContent: 'space-between', ml: 3}}>
                            <Font variant='button'>
                                กาญจนบุรี
                            </Font>
                            <Font variant='button'>
                                9
                            </Font>
                        </Grid>
                </Changwatbutton>
            </Grid>
            </Paper>
                <Grid container py= {1} sx= {{justifyContent: 'space-between', backgroundColor: '#BBB7B7', borderRadius: '0px 0px 4px 4px'}}>
                    <Grid item></Grid>
                    <Grid item>
                        <Pagination count={10} variant="outlined" shape="rounded"/>
                    </Grid>
                </Grid>
        </Grid>
        </Grid>




        <Grid item xs={false} sm={4} md={6} sx={{ width: '100%' }}
        >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929615.196018716!2d92.43077059157704!3d12.903464108699563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1665041235384!5m2!1sth!2sth"
        width="100%"
        height={850}
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