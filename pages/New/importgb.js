import React from 'react'
import { Grid, Box, Typography, Paper, Button, Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './newt.module.css';
import Slide from '@mui/material/Slide';



const top100Films = [
  { label: 'ทดสอบ', year: 1994 },
  ];
export default function Contrast() {

  const [errorChangwat, setErrorChangwat] = React.useState(false);
  const [errorBranch, setErrorBranch] = React.useState(false);
  const [valueChangwat, setValueChangwat] = React.useState('');
  const [valueBranch, setValueBranch] = React.useState('');
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

  const [errorD, setErrorD] = React.useState(false);
  const [document, setDocument] = React.useState('');
  const handleChangeDocument = (event, value) => {
    setDocument(value); 
    setErrorD(false);
  }

  const [errorF, setErrorF] = React.useState(false);
  const [errorZ, setErrorZ] = React.useState(false);
  const [files, setFiles] = React.useState('');
  const [zones, setZone] = React.useState('');
  const handleFile = (event, value) => {
    setFiles(value); 
    setErrorF(false);
  }
  const handleZone = (event, value) => {
    setZone(value); 
    setErrorZ(false);
  }








  return (
    <div>
      <Grid sx={{ 
          bgcolor: 'white',
      }}>
        <Grid container sx={{ 
          pr: 2,
          pt: 1,
          justifyContent: 'center',
          }}>
        <Typography variant="text" className={styles.kano} sx={{ ml: 1}}>
            นำเข้าและจัดการชั้นข้อมูลรูปแปลงที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
        </Typography>


         <Grid sx={{ mt: 2}}>
          <Stack direction='row' >
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={valueChangwat}
          onChange={handleChangwat}
          sx={{ width: '48%', ml: '3%', mt: '1%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> จังหวัด </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
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
          label={<div>
            <Typography variant="text" className={styles.kanit}> สำนักงาน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          error={errorBranch}
          helperText={errorBranch ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>

          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={document}
          onChange={handleChangeDocument}
          sx={{ width: '30%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ประเภทเอกสาร </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          error={errorD}
          helperText={errorD ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />
          <TextField  
          focused 
          type={"file"}
          value={files}
          onChange={handleFile}
          error={errorF}
          helperText={errorF ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          sx={{ width: '45%', ml: '3%', mt: '2%' }}
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลือกไฟล์ </Typography>
          </div>}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          value={zones}
          onChange={handleZone}
          sx={{ width: '20%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลือกโซน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          error={errorZ}
          helperText={errorZ ? <text className={styles.kanit}>กรุณากรอกข้อมูลให้ครบ</text> : ""}
          />}
          />     
          </Stack>

          <Grid container 
          justifyContent="center" 
          alignItems="center"
          sx={{ p: '1%', mr: '3.5%' }}
          >
            <Button variant="contained" color='primary'
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
              if ( files == '' ){
                setErrorF(true);
              }
              if ( zones == '' ){
                setErrorZ(true);
              }
              else
              if ( valueChangwat != '' )
              if ( valueBranch != '' )
              if ( document != '' )
              if ( files != '' )
              if ( zones != '' ){
                setValueChangwat('');
                setValueBranch('');
                setDocument('');
                setFiles('');
                setZone('');
              }
            }}>
              <text className={styles.kanit}>ตรวจสอบไฟล์นำเข้า</text>
            </Button>
          </Grid>


          </Grid>
        </Grid>



      </Grid>
    </div>
  )
}