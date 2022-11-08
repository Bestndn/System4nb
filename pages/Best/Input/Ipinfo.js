import React from 'react'
import { Autocomplete, Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import styles from '../../../styles/Home.module.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' }
]

export default function Inputinfo() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    };

      const Editgrid = styled(Grid)({
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '90%',
        marginTop: '1%',
        
      });
      const Typography1 = styled(Typography)({
        fontFamily: 'kanit',
        color: 'black'
      });
    
      const TextField1 = styled(TextField)({
        width: '70%',
        "& .MuiInputBase-root": {
            backgroundColor: '#fff'
        }
      });
      const Shapegrid = styled(Grid)({
        border: '1px solid #314365', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
        backgroundColor: '#fff'
      });
      const Formgrid = styled(Grid)({
        justifyContent: 'center', 
        border: '1px solid #314365', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
        backgroundColor: '#fff'
      });
      const ConfirmEdit = styled(Button)({
        fontFamily: 'kanit',
        fontWeight: 'bold',
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
      const Page = styled(Button)({
        fontFamily: 'kanit',
        width: '110px',
        fontWeight: 'bold',
        border: '1px solid #2F4266',
        borderRadius: '8px', 
        backgroundColor: '#fff', 
        color: '#2F4266',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#2F4266',
        color: '#fff',
        transform: 'scale(1.02)'
        },
      });

  return (
    <div>
        <Box sx= {{height: '100vh', minWidth: '1200px'}}>
           <Grid container sx= {{justifyContent: 'space-evenly', my: '0.5%'}}>
                <Formgrid item xs={5.8} container>
                    
                    <Grid container sx= {{justifyContent: 'center', py: '4%'}}>
                        <Typography variant='h5' className= {styles.kanit1} fontWeight= "bold" color= "black">
                        กรุณาระบุข้อมูลการนำเข้า
                        </Typography>
                    </Grid>
                    <Editgrid container>
                        <Typography1 variant='text'>
                        โฉนดที่ดินเลขที่
                        </Typography1>
                        <TextField1
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }} 
                            size= "small"
                        />
                    </Editgrid>
                    <Editgrid container>
                        <Typography1 variant='text'>
                        หน้าสำรวจ
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small"
                        />
                    </Editgrid>
                    <Editgrid container>
                        <Typography1 variant='text'>
                            UTMMAP1
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                            backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            size= "small"
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                            UTMMAP2
                        </Typography1>
                        <Autocomplete
                            id="combo-box-demo"
                            options={optionTypes}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            classes={{ option: styles.kanit}}
                            sx={{ width: '70%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            renderInput={(params) => <TextField {...params}  label= "" size= "small"
                            />}
                        />              
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                            UTMMAP3
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small"
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        UTMMAP4
                        </Typography1>
                        <Autocomplete
                            id="combo-box-demo"
                            options={optionTypes}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            classes={{ option: styles.kanit}}
                            sx={{ width: '70%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            renderInput={(params) => <TextField {...params}  label= "" size= "small"
                            />}
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        UTMSCALE
                        </Typography1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionTypes}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            classes={{ option: styles.kanit}}
                            sx={{ width: '70%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            renderInput={(params) => <TextField {...params} label="" size= "small"/>}
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        เลขที่ดิน
                        </Typography1>
                        <TextField1
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        ไร่
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        งาน
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        ตารางวา
                        </Typography1>
                        <TextField1 
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                        />
                    </Editgrid>
                    
                    <Grid container sx= {{justifyContent: 'flex-end', mt: '3%', mb: '5%', width: '90%'}}>
                        <Grid sx= {{width: '70%'}}>
                            <Grid container sx= {{justifyContent: 'space-between'}}>
                                <ConfirmEdit variant='contained'>
                                <EditRoundedIcon/>
                                    แก้ไข
                                </ConfirmEdit>
                                
                                <Page variant='contained'  
                                startIcon={<AiFillCaretLeft/>}
                                >
                                    ก่อนหน้า
                                </Page>

                                <Page variant='contained' 
                                endIcon={<AiFillCaretRight/>}
                                >
                                    ถัดไป
                                </Page>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container sx= {{justifyContent: 'flex-end', my: '3%', width: '90%', mb: '5%'}}>
                        <ConfirmEdit variant='contained' onClick={handleClick} >
                            ยืนยันการนำเข้า
                        </ConfirmEdit>
                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                กรุณาระบุข้อมูลให้ครบ!
                            </Alert>
                            </Snackbar>
                    </Grid>
                    
                </Formgrid>
                <Shapegrid item xs={5.9} container>
                    
                </Shapegrid>

            </Grid>
        </Box>
    </div>
  )
}
