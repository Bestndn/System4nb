import { Autocomplete, Button, Grid, Select, Typography, TextField, Theme, Divider } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import Map from '../../map'
import React from 'react'


const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' },
]
const optionDocTypes = [
    { key: '1', title: 'โฉนด' },
    { key: '2', title: 'นส.3.ก' },
]
const optionZone = [
    { key: '1', title: 'I' },
    { key: '2', title: 'II' },
    { key: '3', title: 'III' },
    { key: '4', title: 'IV' },
    { key: '5', title: 'V' },
]

export default function Ip() {

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
        <Box sx= {{minWidth: '1400px', position: 'static', backgroundColor: '#fff'}}>
            <Grid container sx= {{height: '100vh', }}>
                <Grid item xs={6.5} sx= {{backgroundColor: '#fff'}}>
                    <Grid container sx= {{justifyContent: 'center'}}>
                        <Typography variant= 'h5' className= {styles.kanit} sx= {{fontWeight: 'bold', my: '4%'}}>
                            นำเข้าและจัดการชั้นข้อมูลรูปแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                        </Typography>
                        <Grid container sx= {{width: '98%'}}>
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between'}}>
                                <Autocomplete
                                id="combo-box-demo"
                                options={optionTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '35%',"& .MuiInputBase-root": {
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
                                size= "small"
                                sx={{ width: '62%',"& .MuiInputBase-root": {
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
                            <Stack direction= "row" sx= {{width: '100%', justifyContent: 'space-between', mt: '3%'}}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionDocTypes}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '30%',"& .MuiInputBase-root": {
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
                            <TextField
                                focused
                                type={"file"}
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '50%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params} 
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>เลือกไฟล์</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            <Autocomplete
                                id="combo-box-demo"
                                options={optionZone}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                classes={{ option: styles.kanit}}
                                size= "small"
                                sx={{ width: '15%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                                renderInput={(params) => <TextField {...params} 
                                label= {
                                    <Grid container>
                                        <Typography sx={edittextfileld1}>เลือกโซน</Typography>
                                        <Typography color="red"> *</Typography>
                                    </Grid>} 
                                />}
                                />
                            </Stack>
                        </Grid>

                        <Searchbutton variant='contained' sx= {{my: '4%'}}>
                                นำเข้า
                        </Searchbutton>
                    </Grid>
                    <Divider variant='middle' />
                </Grid>
                
                <Grid item xs={5.5}>
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
