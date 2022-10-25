import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { ImDatabase } from "react-icons/im";
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import React from 'react'
import dayjs from 'dayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ThLocale from 'date-fns/locale/th';
import TableR from './tableR'

const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' }
]
const optionDocTypes = [
    { key: '1', title: 'โฉนด' },
    { key: '2', title: 'นส.3.ก' }
]

export default function Pricereport() {
    const [Dayvalue, setDayvalue] = React.useState(dayjs());
    const [Dayvalue1, setDayvalue1] = React.useState(dayjs());

    const [show, setShow] = React.useState(false);

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
        <Box sx={{ bgcolor: 'white'}}>
            <Grid container sx= {{width: '1000px', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', m: '3%', bgcolor: 'white'}}>
                <Grid container sx= {{backgroundColor: '#2F4266', borderRadius: '10px 10px 0px 0px', py: '1%'}}>
                    <Typography variant='text' className= {styles.kanit} color= "#fff" sx= {{ml: '5%'}}>
                        รายงานราคาประเมินที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'space-evenly'}}>
                    <Grid sx= {{backgroundColor: '#2F4266', color: '#fff', px: '2%', py: '5%', my: '1%', borderRadius: '10px', boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)'}}>
                        <ImDatabase size={80}/>
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
                                sx={{ width: '48%',"& .MuiInputBase-root": {
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
                                sx={{ width: '48%',"& .MuiInputBase-root": {
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
                                    sx={{ width: '48%',"& .MuiInputBase-root": {
                                        backgroundColor: '#fff', fontFamily: 'kanit'
                                        } }}
                                    components={{
                                    OpenPickerIcon: CalendarMonthRoundedIcon}}
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
                                    components={{
                                    OpenPickerIcon: CalendarMonthRoundedIcon}}
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
                                sx={{ width: '32%',"& .MuiInputBase-root": {
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
                            <Grid container sx= {{justifyContent: 'center', my: '2%'}}>
                                <Searchbutton variant='contained' startIcon= {<FindInPageRoundedIcon/>}
                                onClick={() => {setShow((prev) => !prev);}}>
                                    ค้นหา
                                </Searchbutton>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>




        {show  == true?
        <Grid sx={{ 
          position: 'absolute', 
          width: '120%',  
          zIndex: 1000, 
          top: 360,
          left: '15%',
          }}>
            <TableR/>
        </Grid>
        :null}


    </div>
  )
}
