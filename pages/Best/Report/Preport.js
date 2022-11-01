import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import React from 'react'
import dayjs from 'dayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
    const [Dayvalue, setDayvalue] = React.useState(dayjs());
    const [Dayvalue1, setDayvalue1] = React.useState(dayjs());

    const edittextfileld1 = {
        fontFamily: 'Kanit',
    }
    const Searchbutton = styled(Button)({
        padding: '1%',
        fontFamily: 'kanit',
        width: '120px',
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
        <Box sx= {{position: 'absolute', width: '100%', minWidth: '1200px', zIndex: '200'}}>
        <Grid container sx= {{justifyContent: 'center'}}>
            <Grid sx= {{
                width: '1000px', 
                borderRadius: '10px', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', 
                mt: '1%', 
                backgroundColor: '#fff'
                }}
                >
                <Grid container sx= {{backgroundColor: '#2F4266', borderRadius: '10px 10px 0px 0px', py: '1%'}}>
                    <Typography variant='text' className= {styles.kanit} color= "#fff" sx= {{ml: '5%'}}>
                        รายงานเผยแพร่ข้อมูล
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'space-evenly'}}>
                    <Grid sx= {{
                        backgroundColor: '#2F4266', 
                        color: '#fff', 
                        px: '2%', 
                        py: '3.5%', 
                        mt: '1%', 
                        borderRadius: '10px', 
                        boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)', 
                        height: '130px'
                        }}
                        >
                        <HiOutlineDocumentChartBar size={60}/>
                    </Grid>
                    <Grid sx= {{mt: '1%', width: '85%'}}>
                        <Grid container sx= {{width: '100%'}}>
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between'}}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                sx={{ width: '49%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params}  
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>จังหวัด</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                sx={{ width: '49%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params}  
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>สำนักที่ดิน</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            </Stack>
                        </Grid>
                        <Grid container sx= {{width: '100%', mt: '2%'}}>
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between'}}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                sx={{"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                fullWidth
                                renderInput={(params) => <TextField {...params}  
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>เลือกรายงาน</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            </Stack>
                        </Grid>
                        <Grid container sx= {{width: '100%', mt: '2%'}}>
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between'}}>
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
                                    renderInput={(params) => <TextField {...params} />}
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
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionDocTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                sx={{ width: '25%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params} 
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>ประเภทเอกสาร</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                        <Grid container sx= {{justifyContent: 'center', my: '2%'}}>
                            <Searchbutton variant='contained' startIcon= {<FindInPageRoundedIcon/>}
                            >
                            ค้นหา
                            </Searchbutton>
                        </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    </div>
  )
}
