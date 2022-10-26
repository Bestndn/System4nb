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

const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') };

export default function Editt() {

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

      const Typography2 = styled(Typography)({
        fontFamily: 'kanit',
        color: 'red'
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

      const [valuechanodeland , setValuechanodeland] = React.useState('');
      const [valueSurvey, setValueSurvey] = React.useState('');
      const [valueUTM1, setValueUTM1] = React.useState('');
      const [valueUTM2, setValueUTM2] = React.useState(null);
      const [valueUTM3, setValueUTM3] = React.useState('');
      const [valueUTM4, setValueUTM4] = React.useState('');
      const [valueUTMScale, setValueScale] = React.useState('');

      const [errorchanodeland , setErrorchanodeland] = React.useState(false);
      const [errorSurvey, setErrorSurvey] = React.useState(false);
      const [errorUTM1, setErrorUTM1] = React.useState(false);
      const [errorUTM2, setErrorUTM2] = React.useState(false);
      const [errorUTM3, setErrorUTM3] = React.useState(false);
      const [errorUTM4, setErrorUTM4] = React.useState(false);
      const [errorUTMScale, setErrorUTMScale] = React.useState(false);

      const handleSurvey = (event, value) => {
        setValueSurvey(value);
        console.log(value);
        setErrorSurvey(false);
      }
    
    const handleUTM1 = (event, value) => {
        setValueUTM1(value);
        console.log(value);
        setErrorUTM1(false);
      }
    
      const handleUTM2 = (event, value) => {
        setValueUTM2(value);
        console.log(value);
        setErrorUTM2(false);
      }
    
      const handleUTM3 = (event, value) => {
        setValueUTM3(value);
        console.log(value);
        setErrorUTM3(false);
      }
    
      const handleUTM4 = (event, value) => {
        setValueUTM4(value);
        console.log(value);
        setErrorUTM4(false);
      }
    
      const handleUTMScale = (event, value) => {
        setValueScale(value);
        console.log(value);
        setErrorUTMScale(false);
      }

      const [count, setCount] = React.useState(1);
      const increment = () => {
        setCount((c) => c + 1);
      };

      const unincrement = () => {
        setCount((c) => c - 1);
      };

      const [disbut, setDisbut] = React.useState(true);
      const [editoff, setEditoff] = React.useState(false);

      


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
                        <div>
                        <Typography1 variant='text'> โฉนดที่ดินเลขที่ </Typography1>
                        {/* <Typography2 variant='text'> * </Typography2> */}
                        </div>
                        <TextField1
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }} 
                            size= "small"
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container>
                        <div>
                        <Typography1 variant='text'> หน้าสำรวจ </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small"
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container>
                        <div>
                        <Typography1 variant='text'> UTMMAP1 </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                            backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            size= "small"
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <div>
                        <Typography1 variant='text'> UTMMAP2 </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <Autocomplete
                            disabled={disbut}
                            id="combo-box-demo"
                            options={[
                                {value:'1', title:'I'},
                                {value:'2', title:'II'}, 
                                {value:'3', title:'III'}, 
                                {value:'4', title:'IV'}]
                            }
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
                        <div>
                        <Typography1 variant='text'> UTMMAP3 </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small"
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <div>
                        <Typography1 variant='text'> UTMMAP4 </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <Autocomplete
                            disabled={disbut}
                            id="combo-box-demo"
                            options={[
                                {value4:'1', title4:'01'},
                                {value4:'2', title4:'02'}, 
                                {value4:'3', title4:'03'}, 
                                {value4:'4', title4:'04'},
                                {value4:'5', title4:'05'},
                                {value4:'6', title4:'06'},
                                {value4:'7', title4:'07'},
                                {value4:'8', title4:'08'},
                                {value4:'9', title4:'09'},
                                {value4:'10', title4:'10'},
                                {value4:'11', title4:'11'},
                                {value4:'12', title4:'12'},
                                {value4:'13', title4:'13'},
                                {value4:'14', title4:'14'},
                                {value4:'15', title4:'15'},
                                {value4:'16', title4:'16'},
                                {value4:'17', title4:'17'},
                                {value4:'18', title4:'18'},
                                {value4:'19', title4:'19'},
                                {value4:'20', title4:'20'},
                            ]
                            }
                            getOptionLabel={(option) => option.title4}
                            disableClearable
                            classes={{ option: styles.kanit}}
                            sx={{ width: '70%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            renderInput={(params) => <TextField {...params}  label= "" size= "small"
                            />}
                            inputProps={
                                {maxLength: 2}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <div>
                        <Typography1 variant='text'> UTMSCALE </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <Autocomplete
                            disabled={disbut}
                            disablePortal
                            id="combo-box-demo"
                            options={[
                                {values:'1000', titles:'1000'},
                                {values:'2000', titles:'2000'}, 
                                {values:'3000', titles:'3000'}, 
                                {values:'4000', titles:'4000'}]
                            }
                            getOptionLabel={(option) => option.titles}
                            disableClearable
                            classes={{ option: styles.kanit}}
                            sx={{ width: '70%',"& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                            } }}
                            renderInput={(params) => <TextField {...params} label="" size= "small"/>}
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <div>
                        <Typography1 variant='text'> เลขที่ดิน </Typography1>
                        <Typography2 variant='text'> * </Typography2>
                        </div>
                        <TextField1
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                            inputProps={
                                {maxLength: 4}
                              }
                              onInput={(e) => onlyNumbers(e) }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        ไร่
                        </Typography1>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                            inputProps={
                                {maxLength: 4}
                              }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        งาน
                        </Typography1>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                            inputProps={
                                {maxLength: 4}
                              }
                        />
                    </Editgrid>
                    <Editgrid container >
                        <Typography1 variant='text'>
                        ตารางวา
                        </Typography1>
                        <TextField1 
                            disabled={disbut}
                            sx={{ "& .MuiInputBase-root": {
                                backgroundColor: '#fff', fontFamily: 'kanit'
                                } }}
                            size= "small" 
                            inputProps={
                                {maxLength: 4}
                              }
                        />
                    </Editgrid>
                    
                    <Grid container sx= {{justifyContent: 'flex-end', mt: '3%', mb: '5%', width: '90%'}}>
                        <Grid sx= {{width: '70%'}}>
                            <Grid container sx= {{justifyContent: 'space-between'}}>
                                <ConfirmEdit variant='contained' disabled={editoff}
                                sx={{ '&:disabled':{ bgcolor: 'white', color: '#2F4266' }}}
                                onClick={() => {setDisbut(false); setEditoff(true);}}>
                                <EditRoundedIcon/>
                                    แก้ไข
                                </ConfirmEdit>
                                
                                <Page variant='contained' disabled={count==1?true:false} onClick={unincrement} 
                                sx={{ '&:disabled':{ bgcolor: '#2F4266', color: 'white' }}}
                                startIcon={<AiFillCaretLeft/>}
                                >
                                    ก่อนหน้า
                                </Page>

                                <text>{count}</text>
                                <text>/</text>
                                <text>3</text>

                                <Page variant='contained' disabled={count==3?true:false} onClick={increment} 
                                sx={{ '&:disabled':{ bgcolor: '#2F4266', color: 'white' }}}
                                endIcon={<AiFillCaretRight/>}
                                >
                                    ถัดไป
                                </Page>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container sx= {{justifyContent: 'flex-end', my: '3%', width: '90%', mb: '5%'}}>
                        <ConfirmEdit variant='contained' onClick={handleClick} disabled>
                            ยืนยันการนำเข้า
                        </ConfirmEdit>
                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                This is a error message!
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