import React from 'react'
import { Grid, Box, Typography, Paper, Button, Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/SY4.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Collapse from '@mui/material/Collapse';
import Modal from '@mui/material/Modal';
import Induct from './induct'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { styled } from '@mui/material/styles';
import { set } from 'date-fns';


const top100Films = [
  { label: 'ทดสอบ', year: 1994 },
  ];

export default function Search4n() {

  // menu top
  const [errorD, setErrorD] = React.useState(false);
  const [document, setDocument] = React.useState(''); 
  const handleChangeDocument = (event) => {
    setDocument(event.target.value); 
    setErrorD(false);
  }

  // chanod
  const [errorC, setErrorC] = React.useState(false);
  const [hide1, setHide1] = React.useState(true);
  const [chanodment, setChanodment] = React.useState('');
  const handleChangeChanodment = (event) => {
    setChanodment(event.target.value);
    setErrorC(false);
  }
  // norsor3
  const [errorN, setErrorN] = React.useState(false);
  const [hide2, setHide2] = React.useState(false);
  const [norsorment, setNorsorment] = React.useState('');
  const handleChangeNorsorment = (event) => {
    setNorsorment(event.target.value);
    setErrorN(false); 
  }
  // menu top close

  // control switch
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [formchanode, setFormchanode] = React.useState(true);

  const [show0, setShow0] = React.useState(false);
  const [show9, setShow9] = React.useState(false);
  const [formnorsor, setFormnorsor] = React.useState(false);

  const [modaltrue, setModalTrue] = React.useState(false);
  // close switch

  // value open
  // part1.1
  const [errorChangwat, setErrorChangwat] = React.useState(false);
  const [errorBranch, setErrorBranch] = React.useState(false);

  const [valueChangwat, setValueChangwat] = React.useState('');
  const [valueBranch, setValueBranch] = React.useState('');

  // part1.2
  const [errorNorsor3, setErrorNorsor3] = React.useState(false);
  const [errorChanode, setErrorChanode] = React.useState(false);
  const [errorSurvey, setErrorSurvey] = React.useState(false);
  const [errorAmphur, setErrorAmphur] = React.useState(false);
  const [errorTumbon, setErrorTumbon] = React.useState(false);

  const [valueNorsor3, setValueNorsor3] = React.useState('');
  const [valueChanode, setValueChanode] = React.useState('');
  const [valueSurvey, setValueSurvey] = React.useState('');
  const [valueAmphur, setValueAmphur] = React.useState('');
  const [valueTumbon, setValueTumbon] = React.useState('');

  // part1.3
  const [errorLandNo, setErrorLandNo] = React.useState(false);
  const [errorUTM1, setErrorUTM1] = React.useState(false);
  const [errorUTM2, setErrorUTM2] = React.useState(false);
  const [errorUTM3, setErrorUTM3] = React.useState(false);
  const [errorUTM4, setErrorUTM4] = React.useState(false);
  const [errorUTMScale, setErrorUTMScale] = React.useState(false);

  const [valueLandNo, setValueLandNo] = React.useState('');
  const [valueUTM1, setValueUTM1] = React.useState('');
  const [valueUTM2, setValueUTM2] = React.useState(null);
  const [valueUTM3, setValueUTM3] = React.useState('');
  const [valueUTM4, setValueUTM4] = React.useState('');
  const [valueUTMScale, setValueScale] = React.useState('');
  // value close

  // handleGET part1.1
  const handleChangwat = (event, value) => {
    setValueChangwat(value);
    console.log(value);
    setErrorChangwat(false);
  }

  const handleBranch = (event, value) => {
    setValueBranch(value);
    console.log(value);
    setErrorBranch(false);
  }



  // handleGET part1.2
  const handleNorsor3 = (event, value) => {
    setValueNorsor3(value);
    console.log(value);
    setErrorNorsor3(false);
  }

  const handleChanode = (event, value) => {
    setValueChanode(value);
    console.log(value);
    setErrorChanode(false);
  }

  const handleSurvey = (event, value) => {
    setValueSurvey(value);
    console.log(value);
    setErrorSurvey(false);
  }

  const handleAmphur = (event, value) => {
    setValueAmphur(value);
    console.log(value);
    setErrorAmphur(false);
  }

  const handleTumbon = (event, value) => {
    setValueTumbon(value);
    console.log(value);
    setErrorTumbon(false);
  }


  // part1.3
  const handleLandNo = (event, value) => {
    setValueLandNo(value);
    console.log(value);
    setErrorLandNo(false);
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
  //value close 

  const Backbutton = styled(Button)({
    borderRadius: '10px', 
    width: '130px', 
    height: '45px', 
    backgroundColor: '#EAB120', 
    color: '#fff', 
    boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        border: '1px solid #ECECEC',
        backgroundColor: '#fff',
        color: '#EAB120',
        boxShadow: '4px 4px 4px rgba(234,177,32)',
        transform: 'scale(1.02)'
      },
  });

  const Inputbutton = styled(Button)({
    borderRadius: '10px', 
    width: '130px', 
    height: '45px', 
    backgroundColor: '#2F4266', 
    color: '#fff', 
    boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 'bold',
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        border: '1px solid #ECECEC',
        backgroundColor: '#fff',
        color: '#2F4266',
        boxShadow: '4px 4px 4px rgba(47, 66, 102)',
        transform: 'scale(1.02)'
      },
  });





  return (
    <div>
      <Grid sx={{ 
          bgcolor: 'white',
          borderBottomRightRadius: '10px',
          borderBottomLeftRadius: '10px',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          boxShadow: 20 
      }}>

        <Grid sx={{ 
          bgcolor: '#2F4266', 
          p: '1%', 
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          }}>
            <Typography variant="text" className={styles.kanit} 
            sx={{ ml: '10%', color: 'white' }}>
              กรุณาระบุรายละเอียดเพื่อค้นหา
            </Typography>
        </Grid>

        

        <Grid container sx={{ 
          p: '1%',
          }}>
          <Button variant="contained" color='primary' disabled className={styles.Buttondis}
          sx={{ bgcolor: '#2F4266', color: 'white', width: '15%', height: '150px' }}>
            <SearchIcon sx={{ fontSize: 100 }}/>
          </Button>


         <Grid sx={{ width: '80%'}}>
          <Stack direction='row' >
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueChangwat}
          onChange={handleChangwat}
          sx={{ width: '48%', ml: '3%', mt: '1%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> จังหวัด </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          }
          error={errorChangwat}
          helperText={errorChangwat ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />

          <Autocomplete
          id="combo-box-demo"
          options={top100Films}   
          value={valueBranch}
          onChange={handleBranch}      
          sx={{ width: '48%', ml: '3%', mt: '1%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> สำนักงาน </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorBranch}
          helperText={errorBranch ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>

          <Stack direction='row'>
          <FormControl fullWidth sx={{ width: '48%', ml: '3%', mt: '2%' }} error={errorD}>
          <InputLabel id="demo-simple-select-labelNBG">
          <div>
            <Typography variant="text" className={styles.kanit}> เอกสารประกอบ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          </InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={document}
          label=" เอกสารประกอบ * "
          onChange={handleChangeDocument}>
          <MenuItem value={10} className={styles.kanit} 
          onClick={() => {
            setFormchanode(true);
            setFormnorsor(false);

            setShow0(false);
            setShow9(false);
            setNorsorment('');
          }}
          >โฉนด</MenuItem>
          <MenuItem value={20} className={styles.kanit}
          onClick={() => {
            setFormnorsor(true);
            setFormchanode(false);

            setShow1(false);
            setShow2(false);
            setChanodment('');
          }}
          >น.ส. 3ก.</MenuItem>
          </Select>
          <FormHelperText>{errorD ? 
            <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          </FormHelperText>
          </FormControl>
          
          { formchanode ?
          <FormControl fullWidth sx={{ width: '48%', ml: '3%', mt: '2%' }} error={errorC}>
          <InputLabel id="demo-simple-select-label">
          <div>
            <Typography variant="text" className={styles.kanit}> รายการค้นหา </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          </InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chanodment}
          label=" รายการค้นหา * "
          onChange={handleChangeChanodment}>
          <MenuItem value={11} className={styles.kanit} 
          onClick={() => {
            setShow1(true);
            setShow2(false);
            
            setValueChanode('');  setErrorChanode(false);
            setValueSurvey('');   setErrorSurvey(false);
            setValueAmphur('');   setErrorAmphur(false);
            setValueTumbon('');   setErrorTumbon(false);
          }}
          >เลขที่โฉนด</MenuItem>
          <MenuItem value={22} className={styles.kanit} 
          onClick={() => {
            setShow2(true);
            setShow1(false);

            setValueLandNo('');  setErrorLandNo(false);
            setValueUTM1('');    setErrorUTM1(false);
            setValueUTM2(null);  setErrorUTM2(false);
            setValueUTM3('');    setErrorUTM3(false);
            setValueUTM4('');    setErrorUTM4(false);
            setValueScale('');   setErrorUTMScale(false);
          }}
          >เลขที่ดิน</MenuItem>
          </Select>
          <FormHelperText>{errorC ? 
            <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          </FormHelperText>
          </FormControl>
          : null }

          { formnorsor ?
          <FormControl fullWidth sx={{ width: '48%', ml: '3%', mt: '2%' }} error={errorN}>
          <InputLabel id="demo-simple-select-label">
          <div>
            <Typography variant="text" className={styles.kanit}> รายการค้นหา </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          </InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={norsorment}
          label=" รายการค้นหา * "
          onChange={handleChangeNorsorment}>
          <MenuItem value={111} className={styles.kanit} 
          onClick={() => {
            setShow0(true);
            setShow9(false);

            setValueNorsor3(''); setErrorNorsor3(false);
            setValueAmphur('');  setErrorAmphur(false);
            setValueTumbon('');  setErrorTumbon(false);
          }}
          >เลขที่โฉนด</MenuItem>
          <MenuItem value={222} className={styles.kanit} 
          onClick={() => {
            setShow9(true);
            setShow0(false);

            setValueAmphur('');  setErrorAmphur(false);
            setValueTumbon('');  setErrorTumbon(false);
            setValueLandNo('');  setErrorLandNo(false);
            setValueUTM1('');    setErrorUTM1(false);
            setValueUTM2(null);    setErrorUTM2(false);
            setValueUTM4('');    setErrorUTM4(false);
            setValueScale('');   setErrorUTMScale(false);
          }}
          >เลขที่ดิน</MenuItem>
          </Select>
          <FormHelperText>{errorN ? 
            <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          </FormHelperText>
          </FormControl>
          : null }
          </Stack>


          <Collapse in={show1}>
          <div>
          <Grid 
          sx={{ 
            borderBottomStyle: 'solid',
            borderColor: '#000',
            color: 'white',
            ml: '3%',
            mt: '3%'
            }}> 
          </Grid>


          <Stack direction='row'>
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueChanode}
          onChange={handleChanode}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> เลขที่โฉนด </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorChanode}
          helperText={errorChanode ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueSurvey}
          onChange={handleSurvey}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> หน้าสำรวจ </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          }  
          error={errorSurvey}
          helperText={errorSurvey ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> อำเภอ </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorAmphur}
          helperText={errorAmphur ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
              <Typography variant="text" className={styles.kanit}> ตำบล </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          }  
          error={errorTumbon}
          helperText={errorTumbon ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }} 
            onClick={() => {
              if ( valueChangwat == '' ){
                setErrorChangwat(true);
              }
              if ( valueBranch == '' ){
                setErrorBranch(true);
              }
              if ( document == '' ){
                setErrorD(true);
              }
              if ( chanodment == '' ){
                setErrorC(true);
              }
              if ( valueChanode == '' ){
                setErrorChanode(true);
              }
              if ( valueSurvey == '' ){
                setErrorSurvey(true);
              }
              if ( valueAmphur == '' ){
                setErrorAmphur(true);
              }
              if ( valueTumbon == '' ){
                setErrorTumbon(true);
              }
              else 
              if ( valueChangwat != '' )
              if ( valueBranch != '' )
              if ( document != '' )
              if ( chanodment != '' )
              if ( valueChanode != '' )
              if ( valueSurvey != '' )
              if ( valueAmphur != '' )
              if ( valueTumbon != '' ){
                setModalTrue(true);
              }
            }}
            >
              <text className={styles.kanit}>ค้นหา</text>
            </Button>

            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}
            onClick={() => {
              setValueChangwat(''); setErrorChangwat(false);
              setValueBranch('');   setErrorBranch(false);

              setValueChanode('');  setErrorChanode(false);
              setValueSurvey('');   setErrorSurvey(false);
              setValueAmphur('');   setErrorAmphur(false);
              setValueTumbon('');   setErrorTumbon(false);
            }}>
              <text className={styles.kanit}>ล้างข้อมูล</text>
            </Button>
          </Grid>
          </div>
          </Collapse>



          <Collapse in={show2}>
          <div>
          <Grid 
          sx={{ 
            borderBottomStyle: 'solid',
            borderColor: '#000',
            color: 'white',
            ml: '3%',
            mt: '3%'
            }}> 
          </Grid>


          <Stack direction='row'>
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueLandNo}
          onChange={handleLandNo}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
            <Typography variant="text" className={styles.kanit}> เลขที่ดิน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorLandNo}
          helperText={errorLandNo ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueUTM1}
          onChange={handleUTM1}
          sx={{ width: '34%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
            <Typography variant="text" className={styles.kanit}> ระวางแผนภูมิประเทศ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          }  
          error={errorUTM1}
          helperText={errorUTM1 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          disableClearable
          id="free-solo-demo"
          sx={{ width: '12%', ml: '2%', mt: '2%' }}
          options={[
              {value:'1', title:'I'},
              {value:'2', title:'II'}, 
              {value:'3', title:'III'}, 
              {value:'4', title:'IV'}]
          }
          value={valueUTM2}
          onChange={handleUTM2}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
            <Typography variant="text" className={styles.kanit}> ซีรี่ย์</Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorUTM2}
          />}
          />  
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueUTM3}
          onChange={handleUTM3}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
            <Typography variant="text" className={styles.kanit}> หมายเลขระวาง </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          } 
          error={errorUTM3}
          helperText={errorUTM3 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueUTM4}
          onChange={handleUTM4}
          sx={{ width: '25%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={
          <div>
            <Typography variant="text" className={styles.kanit}> แผ่นที่หมายเลขระวาง </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>
          }  
          error={errorUTM4}
          helperText={errorUTM4 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />    
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueUTMScale}
          onChange={handleUTMScale}
          sx={{ width: '22%', ml: '1%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> มาตราส่วน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          error={errorUTMScale}
          helperText={errorUTMScale ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}
            onClick={() => {
              if ( valueChangwat == '' ){
                setErrorChangwat(true);
              }
              if ( valueBranch == '' ){
                setErrorBranch(true);
              }
              if ( document == '' ){
                setErrorD(true);
              }
              if ( chanodment == '' ){
                setErrorC(true);
              }
              if ( valueLandNo == '' ){
                setErrorLandNo(true);
              }
              if ( valueUTM1 == '' ){
                setErrorUTM1(true);
              }
              if ( valueUTM2 == null ){
                setErrorUTM2(true);
              }
              if ( valueUTM3 == '' ){
                setErrorUTM3(true);
              }
              if ( valueUTM4 == '' ){
                setErrorUTM4(true);
              }
              if ( valueUTMScale == '' ){
                setErrorUTMScale(true);
              }
              else
              if ( valueChangwat != '' )
              if ( valueBranch != '' )
              if ( document != '' )
              if ( chanodment != '' )
              if ( valueLandNo != '' )
              if ( valueUTM1 != '' )
              if ( valueUTM2 != null )
              if ( valueUTM3 != '' )
              if ( valueUTM4 != '' )
              if ( valueUTMScale != '' ){
                setModalTrue(true);
              }
            }}
            >
              <text className={styles.kanit}>ค้นหา</text>
            </Button>

            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}
            onClick={() => {
              setValueChangwat(''); setErrorChangwat(false);
              setValueBranch('');   setErrorBranch(false);
              
              setValueLandNo('');  setErrorLandNo(false);
              setValueUTM1('');    setErrorUTM1(false);
              setValueUTM2(null);  setErrorUTM2(false);
              setValueUTM3('');    setErrorUTM3(false);
              setValueUTM4('');    setErrorUTM4(false);
              setValueScale('');   setErrorUTMScale(false);
            }}>
              <text className={styles.kanit}>ล้างข้อมูล</text>
            </Button>
          </Grid>
          </div>
          </Collapse>




          <Collapse in={show0}>
          <Grid 
          sx={{ 
            borderBottomStyle: 'solid',
            borderColor: '#000',
            color: 'white',
            ml: '3%',
            mt: '3%'
            }}> 
          </Grid>


          <Stack direction='row'>
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueNorsor3}
          onChange={handleNorsor3}
          sx={{ width: '47%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลขที่น.ส. 3ก. </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          error={errorNorsor3}
          helperText={errorNorsor3 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> อำเภอ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          error={errorAmphur}
          helperText={errorAmphur ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ตำบล </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          error={errorTumbon}
          helperText={errorTumbon ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}
            onClick={() => {
              if ( valueChangwat == ''){
                setErrorChangwat(true);
              }
              if ( valueBranch == '' ){
                setErrorBranch(true);
              }
              if ( document == '' ){
                setErrorD(true);
              }
              if ( norsorment == '' ){
                setErrorN(true);
              }
              if ( valueNorsor3 == '' ){
                setErrorNorsor3(true);
              }
              if ( valueAmphur == '' ){
                setErrorAmphur(true);
              }
              if ( valueTumbon == '' ){
                setErrorTumbon(true);
              }
              else
              if ( valueChangwat != '')
              if ( valueBranch != '' )
              if ( document != '' )
              if ( norsorment != '' )
              if ( valueNorsor3 != '' )
              if ( valueAmphur != '' )
              if ( valueTumbon != '' ){
                setModalTrue(true);
              }
            }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>


            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}
            onClick={() => {
              setValueChangwat('');  setErrorChangwat(false);
              setValueBranch('');    setErrorBranch(false);
              setValueNorsor3('');   setErrorNorsor3(false);
              setValueAmphur('');    setErrorAmphur(false);
              setValueTumbon('');    setErrorTumbon(false);
            }}
            >
              <text className={styles.kanit}>ล้างข้อมูล</text>
            </Button>
          </Grid>
          </Collapse>


          <Collapse in={show9}>
          <Grid 
          sx={{ 
            borderBottomStyle: 'solid',
            borderColor: '#000',
            color: 'white',
            ml: '3%',
            mt: '3%'
            }}> 
          </Grid>


          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> อำเภอ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}
          error={errorAmphur}
          helperText={errorAmphur ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ตำบล </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}
          error={errorTumbon}
          helperText={errorTumbon ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>


          <Stack direction='row'>
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueLandNo}
          onChange={handleLandNo}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลขที่ดิน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}
          error={errorLandNo}
          helperText={errorLandNo ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          value={valueUTM1}
          onChange={handleUTM1}
          sx={{ width: '34%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ระวางแผนภูมิประเทศ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          error={errorUTM1}
          helperText={errorUTM1 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <Autocomplete
          disableClearable
          id="free-solo-demo"
          sx={{ width: '12%', ml: '2%', mt: '2%' }}
          options={[
              {valuenor:'1', titlenor:'I'},
              {valuenor:'2', titlenor:'II'}, 
              {valuenor:'3', titlenor:'III'}, 
              {valuenor:'4', titlenor:'IV'}]
          }
          value={valueUTM2}
          onChange={handleUTM2}
          getOptionLabel={(option) => option.titlenor}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ซีรี่ย์</Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          error={errorUTM2}
          />}
          />  
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueUTM4}
          onChange={handleUTM4}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> แผ่นที่หมายเลขระวาง </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}
          error={errorUTM4}
          helperText={errorUTM4 ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />    
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueUTMScale}
          onChange={handleUTMScale}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> มาตราส่วน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          error={errorUTMScale}
          helperText={errorUTMScale ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>

          



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}
            onClick={() => {
              if ( valueChangwat == '' ){
                setErrorChangwat(true);
              }
              if ( valueBranch == '' ){
                setErrorBranch(true);
              }
              if ( document == '' ){
                setErrorD(true);
              }
              if ( norsorment == '' ){
                setErrorN(true);
              }
              if ( valueAmphur == '' ){
                setErrorAmphur(true);
              }
              if ( valueTumbon == '' ){
                setErrorTumbon(true);
              }
              if ( valueLandNo == '' ){
                setErrorLandNo(true);
              }
              if ( valueUTM1 == '' ){
                setErrorUTM1(true);
              }
              if ( valueUTM2 == null ){
                setErrorUTM2(true);
              }
              if ( valueUTM4 == '' ){
                setErrorUTM4(true);
              }
              if ( valueUTMScale == '' ){
                setErrorUTMScale(true);
              }
              else
              if ( valueChangwat != '' )
              if ( valueBranch != '' )
              if ( document != '' )
              if ( norsorment != '' )
              if ( valueAmphur != '' )
              if ( valueTumbon != '' )
              if ( valueLandNo != '' )
              if ( valueUTM1 != '' )
              if ( valueUTM2 != null )
              if ( valueUTM4 != '' )
              if ( valueUTMScale != '' ){
                setModalTrue(true);
              }
            }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>


            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}
            onClick={() => {
              setValueChangwat(''); setErrorChangwat(false);
              setValueBranch('');   setErrorBranch(false);
              
              setValueAmphur('');  setErrorAmphur(false);
              setValueTumbon('');  setErrorTumbon(false);
              setValueLandNo('');  setErrorLandNo(false);
              setValueUTM1('');    setErrorUTM1(false);
              setValueUTM2(null);  setErrorUTM2(false);
              setValueUTM3('');    setErrorUTM3(false);
              setValueUTM4('');    setErrorUTM4(false);
              setValueScale('');   setErrorUTMScale(false);
            }}>
              <text className={styles.kanit}>ล้างข้อมูล</text>
            </Button>
          </Grid>
          </Collapse>


          </Grid>
        </Grid>


      </Grid>




      <Modal
        open={modaltrue}
        onClose={() => { setModalTrue(false); }}
      >
        <Box sx={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
        }}>
          <Induct onClose={() => { setModalTrue(false); }}/>
        </Box>
      </Modal>


     
    </div>
  )
}


