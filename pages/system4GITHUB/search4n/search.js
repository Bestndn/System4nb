import React from 'react'
import { Grid, Box, Typography, Paper, Button, Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/SY4.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Collapse from '@mui/material/Collapse';


const top100Films = [
  { label: 'ทดสอบ', year: 1994 },
  ];

export default function Search() {

  // menu top
  const [document, setDocument] = React.useState('');

  const handleChangeDocument = (event) => {
    setDocument(event.target.value) 
  }

  // chanod
  const [hide1, setHide1] = React.useState(true);
  const [chanodment, setChanodment] = React.useState('');
  const handleChangeChanodment = (event) => {
    setChanodment(event.target.value) 
  }
  // norsor3
  const [hide2, setHide2] = React.useState(false);
  const [norsorment, setNorsorment] = React.useState('');
  const handleChangeNorsorment = (event) => {
    setNorsorment(event.target.value) 
  }
  // menu top close


 




  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

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
          sx={{ width: '48%', ml: '3%', mt: '1%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> จังหวัด </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>}
            />}
          />

          <Autocomplete
          id="combo-box-demo"
          options={top100Films}         
          sx={{ width: '48%', ml: '3%', mt: '1%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> สำนักงาน </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>} 
            />}
          />     
          </Stack>

          <Stack direction='row'>
          <FormControl fullWidth sx={{ width: '48%', ml: '3%', mt: '2%' }}>
          <InputLabel id="demo-simple-select-label">
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
            setHide1(true);
            setHide2(false);
          }}
          >โฉนด</MenuItem>
          <MenuItem value={20} className={styles.kanit}
          onClick={() => {
            setHide2(true);
            setHide1(false);
          }}
          >น.ส. 3ก.</MenuItem>
          </Select>
          </FormControl>
  
          <FormControl fullWidth sx={{ width: '48%', ml: '3%', mt: '2%' }}>
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
          }}
          >เลขที่โฉนด</MenuItem>
          <MenuItem value={22} className={styles.kanit} 
          onClick={() => {
            setShow2(true);
            setShow1(false);
          }}
          >เลขที่ดิน</MenuItem>
          </Select>
          </FormControl>
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
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> เลขที่โฉนด </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>} 
            />}
          />
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> หน้าสำรวจ </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>}  
            />}
          />     
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> อำเภอ </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>} 
            />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
            renderInput={(params) => <TextField {...params} 
            label={<div>
              <Typography variant="text" className={styles.kanit}> ตำบล </Typography>
              <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
            </div>}  
            />}
          />     
          </Stack>



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            { hide1 ?
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>
            : null }

            { hide2 ?
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>
            : null }

            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}>
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
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลขที่ดิน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          />}
          />
          <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '34%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ระวางแผนภูมิประเทศ </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
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
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> ซีรี่ย์</Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          />}
          />  
          </Stack>



          <Stack direction='row'>
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '48%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> หมายเลขระวาง </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>} 
          />}
          />
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '25%', ml: '3%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> แผ่นที่หมายเลขระวาง </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          />}
          />    
          <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: '22%', ml: '1%', mt: '2%' }}
          renderInput={(params) => <TextField {...params} 
          label={<div>
            <Typography variant="text" className={styles.kanit}> มาตราส่วน </Typography>
            <Typography variant="text" className={styles.kanit} sx={{ color: 'red' }}> *</Typography>
          </div>}  
          />}
          />     
          </Stack>



          <Grid container justifyContent="flex-end" alignItems="flex-end" sx={{ p: '1%', mr: '3.5%' }}>
            { hide1 ?
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>
            : null }

            { hide2 ?
            <Button variant="contained" color='warning' sx={{ bgcolor: '#D7A203', width: 90 }}>
              <text className={styles.kanit}>ค้นหา</text>
            </Button>
            : null }

            <Button variant="contained" color='primary' sx={{ ml: '1%', bgcolor: '#2F4266', width: 90 }}>
              <text className={styles.kanit}>ล้างข้อมูล</text>
            </Button>
          </Grid>
          </div>
          </Collapse>

          


          
          </Grid>

          

         




          
          

          

          








        </Grid>





      </Grid>


     
    </div>
  )
}