import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme, Avatar, Paper, Pagination } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import React from 'react'
import dayjs from 'dayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { FcCalendar } from "react-icons/fc";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import ThLocale from 'date-fns/locale/th';
import Map from '../../map'

const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' },
]
const optionDocTypes = [
    { key: '1', title: 'โฉนด' },
    { key: '2', title: 'นส.3.ก' },
]
const optionDocZones = [
    { key: '1', title: 'I' },
    { key: '2', title: 'II' },
    { key: '3', title: 'III' },
    { key: '4', title: 'IV' },
]

export default function Pricereport() {
    const [value, setValue] = React.useState(null);
    const [Dayvalue, setDayvalue] = React.useState(dayjs());
    const [Dayvalue1, setDayvalue1] = React.useState(dayjs());

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
        <Box sx= {{width: '100%', minWidth: '1440px'}}>
        <Grid container sx= {{justifyContent: 'center'}}>
            <Grid sx= {{
                width: '100%', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', 
                backgroundColor: '#FAC132',
                overflow: 'hidden'
                }}
                >
                <Grid container sx= {{justifyContent: 'flex-start', alignItems: 'center', my: 1}}>
                    <Avatar sx= {{width: 40, height: 40, mx: 1.5, border: '3px solid black'}} >
                        <HiOutlineDocumentChartBar size={30} color= "black"/>
                    </Avatar>
                    <Grid sx= {{width: '92%'}}>
                        <Grid container sx= {{width: '100%'}}>
                            <Typography variant= "h6" className= {styles.kanit1} sx={{fontWeight: 'bold', color: '#fff'}}>
                            รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Grid container sx= {{width: '100%', mt: 2}}>
        <Grid sx= {{backgroundColor: '#fff', width: '30%', height: '90vh', justifyContent: 'center'}}>
            <Grid container sx= {{justifyContent: 'center'}}>
                <Grid container
                sx= {{
                    backgroundColor: '#00A09D',
                    borderRadius: '10px 10px 0px 0px',
                    width: '355px', 
                    height: '45px',
                    color: '#343232',
                    alignItems: 'center',
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
            <Paper sx= {{backgroundColor: '#fff', overflowY: 'scroll', height: '77.5vh'}}>
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
            <Grid sx= {{backgroundColor: '#fff', width: '70%', height: '90vh', justifyContent: 'center', overflow: 'hidden'}}>
                <Map/>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}