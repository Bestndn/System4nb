import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme, Avatar } from '@mui/material'
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
import ThLocale from 'date-fns/locale/th';

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

    const edittextfileld1 = {
        fontFamily: 'Kanit',
    }
    const edittextfileld = {
        backgroundColor: '#fff',
        borderRadius: '4px'
    }
    const Searchbutton = styled(Button)({
        padding: '1%',
        fontFamily: 'kanit',
        width: '120px',
        height: '40px',
        border: '1px solid #FAC132',
        borderRadius: '8px', 
        backgroundColor: '#FAC132', 
        color: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#fff',
        color: '#FAC132',
        transform: 'scale(1.02)'
        },
      });
      

  return (
    <div>
        <Box sx= {{position: 'absolute', width: '100%', minWidth: '1200px', zIndex: '200'}}>
        <Grid container sx= {{justifyContent: 'center'}}>
            <Grid sx= {{
                width: '100%', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', 
                backgroundColor: 'rgba(0, 160, 157, 0.65)'
                }}
                >
                <Grid container sx= {{justifyContent: 'flex-start', alignItems: 'center', my: 1}}>
                    <Avatar sx= {{width: 90, height: 90, mx: 1.5, border: '3px solid black'}} >
                        <HiOutlineDocumentChartBar size={50} color= "black"/>
                    </Avatar>
                    <Grid sx= {{width: '92%'}}>
                        <Grid container sx= {{width: '100%'}}>
                            <Typography variant= "h6" className= {styles.kanit1} sx={{fontWeight: 'bold', color: '#fff'}}>
                                รายงานบัญชีการประเมินราคาที่ดินไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                            </Typography>
                        </Grid>
                        <Grid container sx= {{width: '100%', pt: 1}}>
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '20%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params}  
                                placeholder= "กรุณาเลือกจังหวัด" 
                                />}
                                />
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '20%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params}  
                                placeholder= "กรุณาเลือกสำนักงานที่ดิน"
                                />}
                                />
                            <Stack direction= "column" justifyContent= "space-between" alignItem= "center" sx= {{height: 35}}>
                                <Button variant='contained' component= "Grid" 
                                sx= {{
                                    height: 15,
                                    backgroundColor: '#FAC132',
                                    '&:hover': {
                                        backgroundColor: '#FAC132',
                                        transform: 'scale(1.02)'
                                        }
                                    }}
                                    >
                                    <Typography variant='caption' fontFamily= "kanit" fontWeight= "bold">
                                        ระหว่างวัน
                                    </Typography>
                                </Button>
                                <Button variant='contained' component= "Grid"
                                sx= {{
                                    height: 15,
                                    backgroundColor: '#fff',
                                    border: '1px solid #000000',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        transform: 'scale(1.02)'
                                        }
                                    }}
                                    >
                                    <Typography variant='caption' fontFamily= "kanit" fontWeight= "bold" color= "black">
                                        ประจำเดือน
                                    </Typography>
                                </Button>
                            </Stack>
                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ThLocale}>
                                <DatePicker
                                    disableFuture
                                    inputFormat='yyyy-MM-dd'
                                    label={
                                        <Grid container>
                                            <Typography sx={edittextfileld1}>ตั้งแต่วันที่</Typography>
                                            <Typography color="red"> *</Typography>
                                        </Grid>}
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    classes={{ option: styles.kanit}}
                                    sx={{ width: '30%',"& .MuiInputBase-root": {
                                        backgroundColor: '#fff', fontFamily: 'kanit'
                                        } }}
                                    components={{
                                    OpenPickerIcon: FcCalendar}}
                                    value={Dayvalue}
                                    onChange={(newValue) => {
                                    setDayvalue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} size= "small" sx= {edittextfileld}/>}
                                    />
                                <DatePicker
                                    disableFuture
                                    inputFormat='yyyy-MM-dd'
                                    label={
                                        <Grid container>
                                            <Typography sx={edittextfileld1}>ถึงวันที่</Typography>
                                            <Typography color="red"> *</Typography>
                                        </Grid>}
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    classes={{ option: styles.kanit}}
                                    sx={{ width: '30%',"& .MuiInputBase-root": {
                                        backgroundColor: '#fff', fontFamily: 'kanit'
                                        } }}
                                    components={{
                                    OpenPickerIcon: FcCalendar}}
                                    value={Dayvalue1}
                                    onChange={(newValue) => {
                                    setDayvalue1(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} size= "small" sx= {edittextfileld}/>}
                                    />
                                </LocalizationProvider>
                                    <Searchbutton 
                                    component= "Grid"
                                    variant= "contained"
                                    startIcon= {<FindInPageRoundedIcon/>}>
                                        <Typography variant='button'sx= {{fontFamily: 'kanit', fontWeight: 'bold'}}>
                                            ค้นหา
                                        </Typography>
                                    </Searchbutton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    </div>
  )
}