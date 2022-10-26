import React from 'react'
import { Grid, Box, Typography, Paper, Button, Stack, Modal } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/Home.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Collapse from '@mui/material/Collapse';


import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { styled } from '@mui/material/styles';




const top100Films = [
  { label: 'ทดสอบ', year: 1994 },
  ];

export default function Search(props) {

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
          boxShadow: 20,
          minWidth: '1000px',
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
          sx={{ 
            bgcolor: '#2F4266', 
            color: 'white', 
            width: '15%', 
            height: '150px',
            '&:disabled':{
              bgcolor: '#2F4266', 
              color: 'white', 
            } 
            }}>
            <SearchIcon sx={{ fontSize: 100 }}/>
          </Button>


         <Grid sx={{ width: '80%'}}>
          <Stack direction='row' >
          <Autocomplete
          id="combo-box-demo"
          options={provicetest}
          getOptionLabel={(option) => option.PROVINCE_NAME_TH || ""}
          classes={{ option: styles.kanit}}
          value={valueChangwat}
          onChange={handleChangwat}
          sx={{ width: '48%', ml: '3%', mt: '1%', input: { fontFamily: 'Kanit' }  }}
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
          options={branchtest}
          getOptionLabel={(option) => option.BRANCH_NAME || ""}
          classes={{ option: styles.kanit}}  
          value={valueBranch}
          onChange={handleBranch}      
          sx={{ width: '48%', ml: '3%', mt: '1%', input: { fontFamily: 'Kanit' }  }}
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
          onChange={handleChangeDocument}
          >
          <MenuItem value={10} className={styles.kanit} 
          onClick={() => {
            setFormchanode(true);
            setFormnorsor(false);

            setShow0(false);
            setShow9(false);
            setNorsorment('');
          }}
          ><text className={styles.kanit}>โฉนด</text></MenuItem>
          <MenuItem value={20} className={styles.kanit}
          onClick={() => {
            setFormnorsor(true);
            setFormchanode(false);

            setShow1(false);
            setShow2(false);
            setChanodment('');
          }}
          ><text className={styles.kanit}>น.ส. 3ก.</text></MenuItem>
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
          ><text className={styles.kanit}>เลขที่โฉนด</text></MenuItem>
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
          ><text className={styles.kanit}>เลขที่ดิน</text></MenuItem>
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
          ><text className={styles.kanit}>เลขที่โฉนด</text></MenuItem>
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
          ><text className={styles.kanit}>เลขที่ดิน</text></MenuItem>
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
          classes={{ option: styles.kanit}}
          value={valueChanode}
          onChange={handleChanode}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' }  }}
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
          classes={{ option: styles.kanit}}
          value={valueSurvey}
          onChange={handleSurvey}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' }  }}
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
          classes={{ option: styles.kanit}}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
              setErrorD(false);
              setErrorC(false);
              setErrorN(false);
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
          classes={{ option: styles.kanit}}
          value={valueLandNo}
          onChange={handleLandNo}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' }  }}
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
          classes={{ option: styles.kanit}}
          value={valueUTM1}
          onChange={handleUTM1}
          sx={{ width: '34%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          sx={{ width: '12%', ml: '2%', mt: '2%', input: { fontFamily: 'Kanit' } }}
          options={[
              {value:'1', title:'I'},
              {value:'2', title:'II'}, 
              {value:'3', title:'III'}, 
              {value:'4', title:'IV'}]
          }
          classes={{ option: styles.kanit}}
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
          classes={{ option: styles.kanit}}
          value={valueUTM3}
          onChange={handleUTM3}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueUTM4}
          onChange={handleUTM4}
          sx={{ width: '25%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueUTMScale}
          onChange={handleUTMScale}
          sx={{ width: '22%', ml: '1%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
              setErrorD(false);
              setErrorC(false);
              setErrorN(false);
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
          classes={{ option: styles.kanit}}
          value={valueNorsor3}
          onChange={handleNorsor3}
          sx={{ width: '47%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
              setErrorD(false);
              setErrorC(false);
              setErrorN(false);
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
          classes={{ option: styles.kanit}}
          value={valueAmphur}
          onChange={handleAmphur}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueTumbon}
          onChange={handleTumbon}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueLandNo}
          onChange={handleLandNo}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueUTM1}
          onChange={handleUTM1}
          sx={{ width: '34%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          sx={{ width: '12%', ml: '2%', mt: '2%', input: { fontFamily: 'Kanit' } }}
          options={[
              {valuenor:'1', titlenor:'I'},
              {valuenor:'2', titlenor:'II'}, 
              {valuenor:'3', titlenor:'III'}, 
              {valuenor:'4', titlenor:'IV'}]
          }
          classes={{ option: styles.kanit}}
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
          classes={{ option: styles.kanit}}
          value={valueUTM4}
          onChange={handleUTM4}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          classes={{ option: styles.kanit}}
          value={valueUTMScale}
          onChange={handleUTMScale}
          sx={{ width: '48%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
              setErrorD(false);
              setErrorC(false);
              setErrorN(false);
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
        <div>
        <Box 
        sx={{
        bgcolor: '#fff', 
        width: '650px', 
        boxShadow : '2px -3px 14px rgba(0, 0, 0, 0.25)', 
        mt: '5%', 
        ml: '5%', 
        borderRadius: '10px'
        }}
        >
        <Grid container sx= {{justifyContent: 'center', alignItems: 'center', py: '10%'}}>
          <CancelRoundedIcon sx= {{ width: '146px', height: '146px', color: '#E64D3B' }}/>
        <Grid container sx= {{justifyContent: 'center', mt: '3%'}}>
          <Typography variant= "h4" className= {styles.kanit} sx= {{fontWeight: 'bold', color: '#848484'}}>
            ไม่ปรากฏขัอมูลในบัญชีราคาประเมินที่ดิน
          </Typography>
        </Grid>
                
        <Grid container sx= {{justifyContent: 'space-evenly', mt: '5%'}}>
          <Backbutton variant= "contained" onClick={() => { setModalTrue(false); }}>กลับหน้าค้นหา</Backbutton>
          <Inputbutton variant= "contained" onClick={props.onClick}>นำเข้า</Inputbutton>
        </Grid>
        </Grid>
        </Box>
        </div>
        </Box>
      </Modal>


     
    </div>
  )
}



const provicetest = [
  {
      "PROVINCE_SEQ": 64,
      "PROVINCE_ID": "81",
      "PROVINCE_ABBR": "กบ",
      "PROVINCE_NAME_TH": "กระบี่",
      "PROVINCE_NAME_EN": "Krabi"
  },
  {
      "PROVINCE_SEQ": 1,
      "PROVINCE_ID": "10",
      "PROVINCE_ABBR": "กท",
      "PROVINCE_NAME_TH": "กรุงเทพมหานคร",
      "PROVINCE_NAME_EN": "Bangkok Metropolitan Administration (BMA)"
  },
  {
      "PROVINCE_SEQ": 56,
      "PROVINCE_ID": "71",
      "PROVINCE_ABBR": "กจ",
      "PROVINCE_NAME_TH": "กาญจนบุรี",
      "PROVINCE_NAME_EN": "Kanchanaburi"
  },
  {
      "PROVINCE_SEQ": 34,
      "PROVINCE_ID": "46",
      "PROVINCE_ABBR": "กส",
      "PROVINCE_NAME_TH": "กาฬสินธุ์",
      "PROVINCE_NAME_EN": "Kalasin"
  },
  {
      "PROVINCE_SEQ": 49,
      "PROVINCE_ID": "62",
      "PROVINCE_ABBR": "กพ",
      "PROVINCE_NAME_TH": "กำแพงเพชร",
      "PROVINCE_NAME_EN": "Kamphaeng Phet"
  },
  {
      "PROVINCE_SEQ": 28,
      "PROVINCE_ID": "40",
      "PROVINCE_ABBR": "ขก",
      "PROVINCE_NAME_TH": "ขอนแก่น",
      "PROVINCE_NAME_EN": "Khon Kaen"
  },
  {
      "PROVINCE_SEQ": 13,
      "PROVINCE_ID": "22",
      "PROVINCE_ABBR": "จบ",
      "PROVINCE_NAME_TH": "จันทบุรี",
      "PROVINCE_NAME_EN": "Chanthaburi"
  },
  {
      "PROVINCE_SEQ": 15,
      "PROVINCE_ID": "24",
      "PROVINCE_ABBR": "ฉช",
      "PROVINCE_NAME_TH": "ฉะเชิงเทรา",
      "PROVINCE_NAME_EN": "Chachoengsao"
  },
  {
      "PROVINCE_SEQ": 11,
      "PROVINCE_ID": "20",
      "PROVINCE_ABBR": "ชบ",
      "PROVINCE_NAME_TH": "ชลบุรี",
      "PROVINCE_NAME_EN": "Chon Buri"
  },
  {
      "PROVINCE_SEQ": 9,
      "PROVINCE_ID": "18",
      "PROVINCE_ABBR": "ชน",
      "PROVINCE_NAME_TH": "ชัยนาท",
      "PROVINCE_NAME_EN": "Chai Nat"
  },
  {
      "PROVINCE_SEQ": 25,
      "PROVINCE_ID": "36",
      "PROVINCE_ABBR": "ชย",
      "PROVINCE_NAME_TH": "ชัยภูมิ",
      "PROVINCE_NAME_EN": "Chaiyaphum"
  },
  {
      "PROVINCE_SEQ": 69,
      "PROVINCE_ID": "86",
      "PROVINCE_ABBR": "ชพ",
      "PROVINCE_NAME_TH": "ชุมพร",
      "PROVINCE_NAME_EN": "Chum Phon"
  },
  {
      "PROVINCE_SEQ": 45,
      "PROVINCE_ID": "57",
      "PROVINCE_ABBR": "ชร",
      "PROVINCE_NAME_TH": "เชียงราย",
      "PROVINCE_NAME_EN": "Chiang Rai"
  },
  {
      "PROVINCE_SEQ": 38,
      "PROVINCE_ID": "50",
      "PROVINCE_ABBR": "ชม",
      "PROVINCE_NAME_TH": "เชียงใหม่",
      "PROVINCE_NAME_EN": "Chiang Mai"
  },
  {
      "PROVINCE_SEQ": 72,
      "PROVINCE_ID": "92",
      "PROVINCE_ABBR": "ตง",
      "PROVINCE_NAME_TH": "ตรัง",
      "PROVINCE_NAME_EN": "Trang"
  },
  {
      "PROVINCE_SEQ": 14,
      "PROVINCE_ID": "23",
      "PROVINCE_ABBR": "ตร",
      "PROVINCE_NAME_TH": "ตราด",
      "PROVINCE_NAME_EN": "Trat"
  },
  {
      "PROVINCE_SEQ": 50,
      "PROVINCE_ID": "63",
      "PROVINCE_ABBR": "ตก",
      "PROVINCE_NAME_TH": "ตาก",
      "PROVINCE_NAME_EN": "Tak"
  },
  {
      "PROVINCE_SEQ": 17,
      "PROVINCE_ID": "26",
      "PROVINCE_ABBR": "นย",
      "PROVINCE_NAME_TH": "นครนายก",
      "PROVINCE_NAME_EN": "Nakhon Nayok"
  },
  {
      "PROVINCE_SEQ": 58,
      "PROVINCE_ID": "73",
      "PROVINCE_ABBR": "นฐ",
      "PROVINCE_NAME_TH": "นครปฐม",
      "PROVINCE_NAME_EN": "Nakhon Pathom"
  },
  {
      "PROVINCE_SEQ": 36,
      "PROVINCE_ID": "48",
      "PROVINCE_ABBR": "นพ",
      "PROVINCE_NAME_TH": "นครพนม",
      "PROVINCE_NAME_EN": "Nakhon Phanom"
  },
  {
      "PROVINCE_SEQ": 19,
      "PROVINCE_ID": "30",
      "PROVINCE_ABBR": "นม",
      "PROVINCE_NAME_TH": "นครราชสีมา",
      "PROVINCE_NAME_EN": "Nakhon Ratchasima"
  },
  {
      "PROVINCE_SEQ": 63,
      "PROVINCE_ID": "80",
      "PROVINCE_ABBR": "นศ",
      "PROVINCE_NAME_TH": "นครศรีธรรมราช",
      "PROVINCE_NAME_EN": "NaKhonsithammarat"
  },
  {
      "PROVINCE_SEQ": 47,
      "PROVINCE_ID": "60",
      "PROVINCE_ABBR": "นว",
      "PROVINCE_NAME_TH": "นครสวรรค์",
      "PROVINCE_NAME_EN": "NaKhon Sawan"
  },
  {
      "PROVINCE_SEQ": 3,
      "PROVINCE_ID": "12",
      "PROVINCE_ABBR": "นบ",
      "PROVINCE_NAME_TH": "นนทบุรี",
      "PROVINCE_NAME_EN": "Nonthaburi"
  },
  {
      "PROVINCE_SEQ": 76,
      "PROVINCE_ID": "96",
      "PROVINCE_ABBR": "นธ",
      "PROVINCE_NAME_TH": "นราธิวาส",
      "PROVINCE_NAME_EN": "Narathiwat"
  },
  {
      "PROVINCE_SEQ": 43,
      "PROVINCE_ID": "55",
      "PROVINCE_ABBR": "นน",
      "PROVINCE_NAME_TH": "น่าน",
      "PROVINCE_NAME_EN": "NAN"
  },
  {
      "PROVINCE_SEQ": 77,
      "PROVINCE_ID": "38",
      "PROVINCE_ABBR": "บก",
      "PROVINCE_NAME_TH": "บึงกาฬ",
      "PROVINCE_NAME_EN": "Bueng Kan"
  },
  {
      "PROVINCE_SEQ": 20,
      "PROVINCE_ID": "31",
      "PROVINCE_ABBR": "บร",
      "PROVINCE_NAME_TH": "บุรีรัมย์",
      "PROVINCE_NAME_EN": "Buri Ram"
  },
  {
      "PROVINCE_SEQ": 4,
      "PROVINCE_ID": "13",
      "PROVINCE_ABBR": "ปท",
      "PROVINCE_NAME_TH": "ปทุมธานี",
      "PROVINCE_NAME_EN": "Pathum Thani"
  },
  {
      "PROVINCE_SEQ": 62,
      "PROVINCE_ID": "77",
      "PROVINCE_ABBR": "ปข",
      "PROVINCE_NAME_TH": "ประจวบคีรีขันธ์",
      "PROVINCE_NAME_EN": "prachuap Khiri Khan"
  },
  {
      "PROVINCE_SEQ": 16,
      "PROVINCE_ID": "25",
      "PROVINCE_ABBR": "ปจ",
      "PROVINCE_NAME_TH": "ปราจีนบุรี",
      "PROVINCE_NAME_EN": "Prachinburi"
  },
  {
      "PROVINCE_SEQ": 74,
      "PROVINCE_ID": "94",
      "PROVINCE_ABBR": "ปน",
      "PROVINCE_NAME_TH": "ปัตตานี",
      "PROVINCE_NAME_EN": "Pattani"
  },
  {
      "PROVINCE_SEQ": 5,
      "PROVINCE_ID": "14",
      "PROVINCE_ABBR": "อย",
      "PROVINCE_NAME_TH": "พระนครศรีอยุธยา",
      "PROVINCE_NAME_EN": "Phranakhonsi Ayutthaya"
  },
  {
      "PROVINCE_SEQ": 44,
      "PROVINCE_ID": "56",
      "PROVINCE_ABBR": "พย",
      "PROVINCE_NAME_TH": "พะเยา",
      "PROVINCE_NAME_EN": "Pha Yao"
  },
  {
      "PROVINCE_SEQ": 65,
      "PROVINCE_ID": "82",
      "PROVINCE_ABBR": "พง",
      "PROVINCE_NAME_TH": "พังงา",
      "PROVINCE_NAME_EN": "Phangnga"
  },
  {
      "PROVINCE_SEQ": 73,
      "PROVINCE_ID": "93",
      "PROVINCE_ABBR": "พท",
      "PROVINCE_NAME_TH": "พัทลุง",
      "PROVINCE_NAME_EN": "Phatthalung"
  },
  {
      "PROVINCE_SEQ": 53,
      "PROVINCE_ID": "66",
      "PROVINCE_ABBR": "พจ",
      "PROVINCE_NAME_TH": "พิจิตร",
      "PROVINCE_NAME_EN": "Phichit"
  },
  {
      "PROVINCE_SEQ": 52,
      "PROVINCE_ID": "65",
      "PROVINCE_ABBR": "พล",
      "PROVINCE_NAME_TH": "พิษณุโลก",
      "PROVINCE_NAME_EN": "Pisanulok"
  },
  {
      "PROVINCE_SEQ": 61,
      "PROVINCE_ID": "76",
      "PROVINCE_ABBR": "พบ",
      "PROVINCE_NAME_TH": "เพชรบุรี",
      "PROVINCE_NAME_EN": "Phechaburi"
  },
  {
      "PROVINCE_SEQ": 54,
      "PROVINCE_ID": "67",
      "PROVINCE_ABBR": "พบ",
      "PROVINCE_NAME_TH": "เพชรบูรณ์",
      "PROVINCE_NAME_EN": "Phetchabun"
  },
  {
      "PROVINCE_SEQ": 42,
      "PROVINCE_ID": "54",
      "PROVINCE_ABBR": "พร",
      "PROVINCE_NAME_TH": "แพร่",
      "PROVINCE_NAME_EN": "Phrae"
  },
  {
      "PROVINCE_SEQ": 66,
      "PROVINCE_ID": "83",
      "PROVINCE_ABBR": "ภก",
      "PROVINCE_NAME_TH": "ภูเก็ต",
      "PROVINCE_NAME_EN": "Phuket"
  },
  {
      "PROVINCE_SEQ": 32,
      "PROVINCE_ID": "44",
      "PROVINCE_ABBR": "มค",
      "PROVINCE_NAME_TH": "มหาสารคาม",
      "PROVINCE_NAME_EN": "Maha Sarakham"
  },
  {
      "PROVINCE_SEQ": 37,
      "PROVINCE_ID": "49",
      "PROVINCE_ABBR": "มห",
      "PROVINCE_NAME_TH": "มุกดาหาร",
      "PROVINCE_NAME_EN": "Mukdahan"
  },
  {
      "PROVINCE_SEQ": 46,
      "PROVINCE_ID": "58",
      "PROVINCE_ABBR": "มส",
      "PROVINCE_NAME_TH": "แม่ฮ่องสอน",
      "PROVINCE_NAME_EN": "Mae Hong Son"
  },
  {
      "PROVINCE_SEQ": 0,
      "PROVINCE_ID": "00",
      "PROVINCE_ABBR": "-",
      "PROVINCE_NAME_TH": "ไม่มีจังหวัด",
      "PROVINCE_NAME_EN": "None"
  },
  {
      "PROVINCE_SEQ": 24,
      "PROVINCE_ID": "35",
      "PROVINCE_ABBR": "ยส",
      "PROVINCE_NAME_TH": "ยโสธร",
      "PROVINCE_NAME_EN": "Yasothon"
  },
  {
      "PROVINCE_SEQ": 75,
      "PROVINCE_ID": "95",
      "PROVINCE_ABBR": "ยล",
      "PROVINCE_NAME_TH": "ยะลา",
      "PROVINCE_NAME_EN": "Yala"
  },
  {
      "PROVINCE_SEQ": 33,
      "PROVINCE_ID": "45",
      "PROVINCE_ABBR": "รอ",
      "PROVINCE_NAME_TH": "ร้อยเอ็ด",
      "PROVINCE_NAME_EN": "Roi Et"
  },
  {
      "PROVINCE_SEQ": 68,
      "PROVINCE_ID": "85",
      "PROVINCE_ABBR": "รน",
      "PROVINCE_NAME_TH": "ระนอง",
      "PROVINCE_NAME_EN": null
  },
  {
      "PROVINCE_SEQ": 12,
      "PROVINCE_ID": "21",
      "PROVINCE_ABBR": "รย",
      "PROVINCE_NAME_TH": "ระยอง",
      "PROVINCE_NAME_EN": "Rayong"
  },
  {
      "PROVINCE_SEQ": 55,
      "PROVINCE_ID": "70",
      "PROVINCE_ABBR": "รบ",
      "PROVINCE_NAME_TH": "ราชบุรี",
      "PROVINCE_NAME_EN": "Ratchaburi"
  },
  {
      "PROVINCE_SEQ": 7,
      "PROVINCE_ID": "16",
      "PROVINCE_ABBR": "ลบ",
      "PROVINCE_NAME_TH": "ลพบุรี",
      "PROVINCE_NAME_EN": "Lop Buri"
  },
  {
      "PROVINCE_SEQ": 40,
      "PROVINCE_ID": "52",
      "PROVINCE_ABBR": "ลป",
      "PROVINCE_NAME_TH": "ลำปาง",
      "PROVINCE_NAME_EN": "LumPang"
  },
  {
      "PROVINCE_SEQ": 39,
      "PROVINCE_ID": "51",
      "PROVINCE_ABBR": "ลพ",
      "PROVINCE_NAME_TH": "ลำพูน",
      "PROVINCE_NAME_EN": "LumPhun"
  },
  {
      "PROVINCE_SEQ": 30,
      "PROVINCE_ID": "42",
      "PROVINCE_ABBR": "ลย",
      "PROVINCE_NAME_TH": "เลย",
      "PROVINCE_NAME_EN": "Loei"
  },
  {
      "PROVINCE_SEQ": 22,
      "PROVINCE_ID": "33",
      "PROVINCE_ABBR": "ศก",
      "PROVINCE_NAME_TH": "ศรีสะเกษ",
      "PROVINCE_NAME_EN": "Si Sa Ket"
  },
  {
      "PROVINCE_SEQ": 35,
      "PROVINCE_ID": "47",
      "PROVINCE_ABBR": "สน",
      "PROVINCE_NAME_TH": "สกลนคร",
      "PROVINCE_NAME_EN": "SaKon Nakhon"
  },
  {
      "PROVINCE_SEQ": 70,
      "PROVINCE_ID": "90",
      "PROVINCE_ABBR": "สข",
      "PROVINCE_NAME_TH": "สงขลา",
      "PROVINCE_NAME_EN": "SongKhla"
  },
  {
      "PROVINCE_SEQ": 71,
      "PROVINCE_ID": "91",
      "PROVINCE_ABBR": "สต",
      "PROVINCE_NAME_TH": "สตูล",
      "PROVINCE_NAME_EN": "Satun"
  },
  {
      "PROVINCE_SEQ": 2,
      "PROVINCE_ID": "11",
      "PROVINCE_ABBR": "สป",
      "PROVINCE_NAME_TH": "สมุทรปราการ",
      "PROVINCE_NAME_EN": "Samut Prakan"
  },
  {
      "PROVINCE_SEQ": 60,
      "PROVINCE_ID": "75",
      "PROVINCE_ABBR": "สส",
      "PROVINCE_NAME_TH": "สมุทรสงคราม",
      "PROVINCE_NAME_EN": "Samut Song khram"
  },
  {
      "PROVINCE_SEQ": 59,
      "PROVINCE_ID": "74",
      "PROVINCE_ABBR": "สค",
      "PROVINCE_NAME_TH": "สมุทรสาคร",
      "PROVINCE_NAME_EN": "Samut Sakhon"
  },
  {
      "PROVINCE_SEQ": 18,
      "PROVINCE_ID": "27",
      "PROVINCE_ABBR": "สก",
      "PROVINCE_NAME_TH": "สระแก้ว",
      "PROVINCE_NAME_EN": "Sa Kaeo"
  },
  {
      "PROVINCE_SEQ": 10,
      "PROVINCE_ID": "19",
      "PROVINCE_ABBR": "สบ",
      "PROVINCE_NAME_TH": "สระบุรี",
      "PROVINCE_NAME_EN": "Saraburi"
  },
  {
      "PROVINCE_SEQ": 8,
      "PROVINCE_ID": "17",
      "PROVINCE_ABBR": "สห",
      "PROVINCE_NAME_TH": "สิงห์บุรี",
      "PROVINCE_NAME_EN": "Sing Buri"
  },
  {
      "PROVINCE_SEQ": 51,
      "PROVINCE_ID": "64",
      "PROVINCE_ABBR": "สท",
      "PROVINCE_NAME_TH": "สุโขทัย",
      "PROVINCE_NAME_EN": "SuKhothai"
  },
  {
      "PROVINCE_SEQ": 57,
      "PROVINCE_ID": "72",
      "PROVINCE_ABBR": "สพ",
      "PROVINCE_NAME_TH": "สุพรรณบุรี",
      "PROVINCE_NAME_EN": "Suphan Buri"
  },
  {
      "PROVINCE_SEQ": 67,
      "PROVINCE_ID": "84",
      "PROVINCE_ABBR": "สฎ",
      "PROVINCE_NAME_TH": "สุราษฎร์ธานี",
      "PROVINCE_NAME_EN": "Surat Thani"
  },
  {
      "PROVINCE_SEQ": 21,
      "PROVINCE_ID": "32",
      "PROVINCE_ABBR": "สร",
      "PROVINCE_NAME_TH": "สุรินทร์",
      "PROVINCE_NAME_EN": "Surin"
  },
  {
      "PROVINCE_SEQ": 31,
      "PROVINCE_ID": "43",
      "PROVINCE_ABBR": "นค",
      "PROVINCE_NAME_TH": "หนองคาย",
      "PROVINCE_NAME_EN": "Nong Khai"
  },
  {
      "PROVINCE_SEQ": 27,
      "PROVINCE_ID": "39",
      "PROVINCE_ABBR": "นภ",
      "PROVINCE_NAME_TH": "หนองบัวลำภู",
      "PROVINCE_NAME_EN": "Nong Bua Lam Phu"
  },
  {
      "PROVINCE_SEQ": 6,
      "PROVINCE_ID": "15",
      "PROVINCE_ABBR": "อท",
      "PROVINCE_NAME_TH": "อ่างทอง",
      "PROVINCE_NAME_EN": "Ang Thong"
  },
  {
      "PROVINCE_SEQ": 26,
      "PROVINCE_ID": "37",
      "PROVINCE_ABBR": "อจ",
      "PROVINCE_NAME_TH": "อำนาจเจริญ",
      "PROVINCE_NAME_EN": "Amnat Charoen"
  },
  {
      "PROVINCE_SEQ": 29,
      "PROVINCE_ID": "41",
      "PROVINCE_ABBR": "อด",
      "PROVINCE_NAME_TH": "อุดรธานี",
      "PROVINCE_NAME_EN": "Udon Thani"
  },
  {
      "PROVINCE_SEQ": 41,
      "PROVINCE_ID": "53",
      "PROVINCE_ABBR": "อต",
      "PROVINCE_NAME_TH": "อุตรดิตถ์",
      "PROVINCE_NAME_EN": "Utaradit"
  },
  {
      "PROVINCE_SEQ": 48,
      "PROVINCE_ID": "61",
      "PROVINCE_ABBR": "อน",
      "PROVINCE_NAME_TH": "อุทัยธานี",
      "PROVINCE_NAME_EN": "Utai ThaNi"
  },
  {
      "PROVINCE_SEQ": 23,
      "PROVINCE_ID": "34",
      "PROVINCE_ABBR": "อบ",
      "PROVINCE_NAME_TH": "อุบลราชธานี",
      "PROVINCE_NAME_EN": "Ubon Ratchathani"
  }
]




const branchtest = [
  {
      "BRANCH": "10000000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร"
  },
  {
      "BRANCH": "10010000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาบางเขน"
  },
  {
      "BRANCH": "10020000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาพระโขนง"
  },
  {
      "BRANCH": "10030000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาบางกะปิ"
  },
  {
      "BRANCH": "10040000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขามีนบุรี"
  },
  {
      "BRANCH": "10050000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาบางขุนเทียน"
  },
  {
      "BRANCH": "10060000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาบางกอกน้อย"
  },
  {
      "BRANCH": "10070000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาธนบุรี"
  },
  {
      "BRANCH": "10080000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาห้วยขวาง"
  },
  {
      "BRANCH": "10090000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาหนองแขม"
  },
  {
      "BRANCH": "10100000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาลาดพร้าว"
  },
  {
      "BRANCH": "10110000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาดอนเมือง"
  },
  {
      "BRANCH": "10120000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาประเวศ"
  },
  {
      "BRANCH": "10130000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาบึงกุ่ม"
  },
  {
      "BRANCH": "10140000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาหนองจอก"
  },
  {
      "BRANCH": "10150000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร  สาขาลาดกระบัง"
  },
  {
      "BRANCH": "10160000",
      "BRANCH_NAME": "สำนักงานที่ดินกรุงเทพมหานคร สาขาจตุจักร"
  }
]


const amphurtest = [
  {
      "AMPHUR_CODE": "01",
      "AMPHUR_DESCRIPTION": "พระนคร"
  },
  {
      "AMPHUR_CODE": "05",
      "AMPHUR_DESCRIPTION": "บางเขน"
  },
  {
      "AMPHUR_CODE": "06",
      "AMPHUR_DESCRIPTION": "บางกะปิ"
  },
  {
      "AMPHUR_CODE": "35",
      "AMPHUR_DESCRIPTION": "จอมทอง"
  },
  {
      "AMPHUR_CODE": "38",
      "AMPHUR_DESCRIPTION": "ลาดพร้าว"
  },
  {
      "AMPHUR_CODE": "42",
      "AMPHUR_DESCRIPTION": "สายไหม"
  },
  {
      "AMPHUR_CODE": "ก1",
      "AMPHUR_DESCRIPTION": "ลาดพร้าว"
  },
  {
      "AMPHUR_CODE": "ข1",
      "AMPHUR_DESCRIPTION": "ลาดพร้าว"
  },
  {
      "AMPHUR_CODE": "ข2",
      "AMPHUR_DESCRIPTION": "บางกะปิ"
  },
  {
      "AMPHUR_CODE": "ข5",
      "AMPHUR_DESCRIPTION": "บางเขน(ลำลูกกา)"
  }
]


