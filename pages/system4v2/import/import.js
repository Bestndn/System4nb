import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import { AiFillCheckCircle, AiFillExclamationCircle, AiFillCloseCircle, AiFillMinusCircle, AiFillChrome   } from "react-icons/ai";
import Pagination from '@mui/material/Pagination';

import Mapp from '../../map'


import styles from '../../../styles/system4v2.module.css';


function createData(t1, t2, t3, t4, t5, t6, t7, t8, t9) {
  return { t1, t2, t3, t4, t5, t6, t7, t8, t9 };
}
const rows = [
  createData(
    1, 
    2922, 
    2531, 
    "4836 | 4830-00 (1:4000)", 
    64, 
    "1-2-0",
    <Fab size="small" color="success" aria-label="add" className={styles.AiFillCheckCircle}><AiFillCheckCircle size={40}/></Fab>, 
    <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillChrome}><AiFillChrome size={40}/></Fab>,
    '',
    ),

    createData(
      2, 
      2922, 
      2531, 
      "4836 | 4830-00 (1:4000)", 
      64, 
      "1-2-0",
      <Fab size="small" color="success" aria-label="add" className={styles.AiFillCheckCircle}><AiFillCheckCircle size={40}/></Fab>, 
      <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillChrome}><AiFillChrome size={40}/></Fab>,
      '',
      ),

      createData(
        3, 
        2922, 
        2531, 
        "4836 | 4830-00 (1:4000)", 
        64, 
        "1-2-0",
        <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillExclamationCircle}><AiFillExclamationCircle size={40}/></Fab>, 
        <Fab size="small" color="secondary" aria-label="add"  className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
        '',
        ),

        createData(
          4, 
          2922, 
          2531, 
          "4836 | 4830-00 (1:4000)", 
          64, 
          "1-2-0",
          <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillCloseCircle}><AiFillCloseCircle size={40}/></Fab>, 
          <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
          '',
          ),

          createData(
            5, 
            2922, 
            2531, 
            "4836 | 4830-00 (1:4000)", 
            64, 
            "1-2-0",
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillCloseCircle}><AiFillCloseCircle size={40}/></Fab>, 
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
            '',
            ),
];

const theme = createTheme();



export default function Importv2() {

  const [errorChangwat, setErrorChangwat] = React.useState(false);
  const [errorBranch, setErrorBranch] = React.useState(false);
  const [valueChangwat, setValueChangwat] = React.useState(null);
  const [valueBranch, setValueBranch] = React.useState(null);
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
  const [document, setDocument] = React.useState(null);
  const handleChangeDocument = (event, value) => {
    setDocument(value); 
    setErrorD(false);
  }

  const [errorF, setErrorF] = React.useState(false);
  const [errorZ, setErrorZ] = React.useState(false);
  const [files, setFiles] = React.useState('');
  const [zones, setZone] = React.useState(null);
  const handleFile = (event, value) => {
    setFiles(value); 
    setErrorF(false);
  }
  const handleZone = (event, value) => {
    setZone(value); 
    setErrorZ(false);
  }


  const clearAll = () => {
    if (valueChangwat == null){
      setErrorChangwat(true);
    }
    if (valueBranch == null){
      setErrorBranch(true);
    }
    if (document == null){
      setErrorD(true);
    }
    if (files == ''){
      setErrorF(true);
    }
    if (zones == null){
      setErrorZ(true);
    }
    else if (valueChangwat != null)
         if (valueBranch != null)
         if (document != null)
         if (files != '')
         if (zones != null){
          setValueChangwat(null);
          setValueBranch(null);
          setDocument(null);
          setFiles('');
          setZone(null);
         }
  }

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: 800 }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
            <Typography variant="text" className={styles.kanit} sx={{ fontWeight: 'bold', fontSize: '19px'}}>
                นำเข้าและจัดการชั้นข้อมูลรูปแปลงที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
        </Box>
        <Box sx={{ ml: 1, mr: 5, mt: 1}}>
        <Stack direction='row' >
          <Autocomplete
          disableClearable
          classes={{ option: styles.kanit}}
          options={provicetest}
          value={valueChangwat}
          onChange={handleChangwat}
          getOptionLabel={(option) => option.PROVINCE_NAME_TH}
          sx={{ width: '40%', ml: '3%', mt: '1%', input: { fontFamily: 'Kanit' } }}
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
          disableClearable
          classes={{ option: styles.kanit}}
          options={branchtest}
          value={valueBranch}
          onChange={handleBranch} 
          getOptionLabel={(option) => option.BRANCH_NAME}
          sx={{ width: '60%', ml: '3%', mt: '1%', input: { fontFamily: 'Kanit' } }}
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
          disableClearable
          classes={{ option: styles.kanit}}
          options={Menus}
          value={document}
          onChange={handleChangeDocument}
          getOptionLabel={(option) => option.label}
          sx={{ width: '30%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
          sx={{ width: '45%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
          label={<div>
            <Typography variant="text" className={styles.kanit}> เลือกไฟล์ </Typography>
          </div>}
          />
          <Autocomplete
          disableClearable
          classes={{ option: styles.kanit}}
          options={Zones}
          value={zones}
          onChange={handleZone}
          getOptionLabel={(option) => option.zone}
          sx={{ width: '20%', ml: '3%', mt: '2%', input: { fontFamily: 'Kanit' } }}
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1}}>
          <Button variant="contained" className={styles.buttonImport} sx={{ width: 100 }} onClick={clearAll}>นำเข้า</Button>
        </Box>
        </Box>

        <Grid>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
      {/* <caption><Pagination count={10} variant="outlined" shape="rounded"/></caption> */}
        <TableHead>
          <TableRow >
            <TableCell align="center" className={styles.kanit}>ลำดับ</TableCell>
            <TableCell align="center" className={styles.kanit}>โฉนดที่ดินเลขที่</TableCell>
            <TableCell align="center" className={styles.kanit}>หน้าสำรวจ</TableCell>
            <TableCell align="center" className={styles.kanit}>ระวาง</TableCell>
            <TableCell align="center" className={styles.kanit}>เลขที่ดิน</TableCell>
            <TableCell align="center" className={styles.kanit}>เนื้อที่ไร่-งาน-ตร.ว.</TableCell>
            <TableCell align="center" className={styles.kanit}>สถานะนำเข้า</TableCell>
            <TableCell align="center" className={styles.kanit}>ไปแผนที่</TableCell>
            <TableCell align="center" className={styles.kanit}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.t1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.t1}
              </TableCell>
              <TableCell align="center">{row.t2}</TableCell>
              <TableCell align="center">{row.t3}</TableCell>
              <TableCell align="center">{row.t4}</TableCell>
              <TableCell align="center">{row.t5}</TableCell>
              <TableCell align="center">{row.t6}</TableCell>
              <TableCell align="center">{row.t7}</TableCell>
              <TableCell align="center">{row.t8}</TableCell>
              <TableCell align="center">{row.t9}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        

        <Grid container>
          <Typography className={styles.kanit} variant="text">
            จำนวนทั้งหมด
          </Typography>

          <Typography className={styles.kanit} variant="text">
            นำเข้าได้
          </Typography>
        </Grid>
        



        </Grid>




        <Grid item xs={false} sm={4} md={6} sx={{ width: '100%', height: 800 }}>
        <Mapp/>
        </Grid>
      </Grid>


    </ThemeProvider>
    </div>
  );
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
    "BRANCH": "81000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกระบี่"
},
{
    "BRANCH": "81010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกระบี่  สาขาอ่าวลึก"
},
{
    "BRANCH": "81020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกระบี่  สาขาคลองท่อม"
},
{
    "BRANCH": "81020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกระบี่  สาขาคลองท่อม ส่วนแยกเกาะลันตา"
},
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
},
{
    "BRANCH": "71000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี"
},
{
    "BRANCH": "71000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี ส่วนแยกเลาขวัญ"
},
{
    "BRANCH": "71010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี  สาขาท่ามะกา"
},
{
    "BRANCH": "71020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี  สาขาบ่อพลอย"
},
{
    "BRANCH": "71030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี  สาขาท่าม่วง"
},
{
    "BRANCH": "71040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี  สาขาทองผาภูมิ"
},
{
    "BRANCH": "71050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาญจนบุรี  สาขาพนมทวน"
},
{
    "BRANCH": "46000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์"
},
{
    "BRANCH": "46010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์  สาขายางตลาด"
},
{
    "BRANCH": "46020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์  สาขากมลาไสย"
},
{
    "BRANCH": "46030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์  สาขาสมเด็จ"
},
{
    "BRANCH": "46040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์  สาขากุฉินารายณ์"
},
{
    "BRANCH": "46050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกาฬสินธุ์  สาขาหนองกุงศรี"
},
{
    "BRANCH": "62000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกำแพงเพชร"
},
{
    "BRANCH": "62010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกำแพงเพชร  สาขาคลองขลุง"
},
{
    "BRANCH": "62020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดกำแพงเพชร  สาขาขาณุวรลักษบุรี"
},
{
    "BRANCH": "40000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น"
},
{
    "BRANCH": "40010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาพล"
},
{
    "BRANCH": "40020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาบ้านไผ่"
},
{
    "BRANCH": "40030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาชุมแพ"
},
{
    "BRANCH": "40040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาหนองสองห้อง"
},
{
    "BRANCH": "40050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาหนองเรือ"
},
{
    "BRANCH": "40060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาภูเวียง"
},
{
    "BRANCH": "40070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาน้ำพอง"
},
{
    "BRANCH": "40070100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาน้ำพอง  ส่วนแยกอุบลรัตน์"
},
{
    "BRANCH": "40080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขากระนวน"
},
{
    "BRANCH": "40090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขามัญจาคีรี"
},
{
    "BRANCH": "40100000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาบ้านฝาง"
},
{
    "BRANCH": "40110000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาพระยืน"
},
{
    "BRANCH": "40120000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาสีชมพู"
},
{
    "BRANCH": "40130000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดขอนแก่น  สาขาแวงน้อย"
},
{
    "BRANCH": "22000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดจันทบุรี"
},
{
    "BRANCH": "22000200",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดจันทบุรี ส่วนแยกแหลมสิงห์"
},
{
    "BRANCH": "22010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดจันทบุรี  สาขาท่าใหม่"
},
{
    "BRANCH": "22020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดจันทบุรี  สาขามะขาม"
},
{
    "BRANCH": "22030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดจันทบุรี สาขาขลุง"
},
{
    "BRANCH": "24000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดฉะเชิงเทรา"
},
{
    "BRANCH": "24010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดฉะเชิงเทรา  สาขาบางคล้า"
},
{
    "BRANCH": "24020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดฉะเชิงเทรา  สาขาพนมสารคาม"
},
{
    "BRANCH": "24030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดฉะเชิงเทรา  สาขาบางปะกง"
},
{
    "BRANCH": "20000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี"
},
{
    "BRANCH": "20010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี  สาขาบางละมุง"
},
{
    "BRANCH": "20020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี  สาขาศรีราชา"
},
{
    "BRANCH": "20030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี  สาขาพนัสนิคม"
},
{
    "BRANCH": "20040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี  สาขาสัตหีบ"
},
{
    "BRANCH": "20050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชลบุรี สาขาบ้านบึง"
},
{
    "BRANCH": "18000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยนาท"
},
{
    "BRANCH": "18010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยนาท  สาขาสรรคบุรี"
},
{
    "BRANCH": "18020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยนาท  สาขาหันคา"
},
{
    "BRANCH": "18030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยนาท  สาขาวัดสิงห์"
},
{
    "BRANCH": "36000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ"
},
{
    "BRANCH": "36010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาภูเขียว"
},
{
    "BRANCH": "36020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาจัตุรัส"
},
{
    "BRANCH": "36030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาแก้งคร้อ"
},
{
    "BRANCH": "36040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาคอนสวรรค์"
},
{
    "BRANCH": "36050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาเกษตรสมบูรณ์"
},
{
    "BRANCH": "36060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาบ้านเขว้า"
},
{
    "BRANCH": "36070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชัยภูมิ  สาขาบำเหน็จณรงค์"
},
{
    "BRANCH": "86000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชุมพร"
},
{
    "BRANCH": "86010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชุมพร  สาขาหลังสวน"
},
{
    "BRANCH": "86020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชุมพร  สาขาปะทิว"
},
{
    "BRANCH": "86030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชุมพร  สาขาสวี"
},
{
    "BRANCH": "86040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดชุมพร สาขาท่าแซะ"
},
{
    "BRANCH": "57000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย"
},
{
    "BRANCH": "57010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเวียงป่าเป้า"
},
{
    "BRANCH": "57010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเวียงป่าเป้า ส่วนแยกแม่สรวย"
},
{
    "BRANCH": "57020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาแม่สาย"
},
{
    "BRANCH": "57030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาแม่จัน"
},
{
    "BRANCH": "57040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเวียงชัย"
},
{
    "BRANCH": "57050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเทิง"
},
{
    "BRANCH": "57050100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเทิง ส่วนแยกพญาเม็งราย"
},
{
    "BRANCH": "57060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาพาน"
},
{
    "BRANCH": "57060100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาพาน ส่วนแยกป่าแดด"
},
{
    "BRANCH": "57070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเชียงของ"
},
{
    "BRANCH": "57080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงราย  สาขาเชียงแสน"
},
{
    "BRANCH": "50000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่"
},
{
    "BRANCH": "50010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาจอมทอง"
},
{
    "BRANCH": "50010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาจอมทอง ส่วนแยกแม่แจ่ม"
},
{
    "BRANCH": "50010200",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาจอมทอง ส่วนแยกฮอด"
},
{
    "BRANCH": "50020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาดอยสะเก็ด"
},
{
    "BRANCH": "50030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาแม่ริม"
},
{
    "BRANCH": "50030100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาแม่ริม ส่วนแยกสะเมิง"
},
{
    "BRANCH": "50040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาสันทราย"
},
{
    "BRANCH": "50050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาสันกำแพง"
},
{
    "BRANCH": "50060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาสันป่าตอง"
},
{
    "BRANCH": "50070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาแม่แตง"
},
{
    "BRANCH": "50080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาหางดง"
},
{
    "BRANCH": "50090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาฝาง"
},
{
    "BRANCH": "50100000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาพร้าว"
},
{
    "BRANCH": "50110000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาเชียงดาว"
},
{
    "BRANCH": "50120000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเชียงใหม่  สาขาสารภี"
},
{
    "BRANCH": "92000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตรัง"
},
{
    "BRANCH": "92010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตรัง  สาขาห้วยยอด"
},
{
    "BRANCH": "92020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตรัง  สาขากันตัง"
},
{
    "BRANCH": "92030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตรัง  สาขาย่านตาขาว"
},
{
    "BRANCH": "92040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตรัง  สาขาสิเกา"
},
{
    "BRANCH": "23000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตราด"
},
{
    "BRANCH": "23000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตราด ส่วนแยกเขาสมิง"
},
{
    "BRANCH": "23000200",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตราด ส่วนแยกแหลมงอบ"
},
{
    "BRANCH": "63000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตาก"
},
{
    "BRANCH": "63010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตาก  สาขาแม่สอด"
},
{
    "BRANCH": "63010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตาก สาขาแม่สอด ส่วนแยกแม่ระมาด"
},
{
    "BRANCH": "63020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดตาก  สาขาสามเงา"
},
{
    "BRANCH": "26000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครนายก"
},
{
    "BRANCH": "26010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครนายก  สาขาองครักษ์"
},
{
    "BRANCH": "73000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครปฐม"
},
{
    "BRANCH": "73010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครปฐม  สาขานครชัยศรี"
},
{
    "BRANCH": "73020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครปฐม  สาขาบางเลน"
},
{
    "BRANCH": "73030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครปฐม  สาขาสามพราน"
},
{
    "BRANCH": "73040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครปฐม  สาขากำแพงแสน"
},
{
    "BRANCH": "48000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม"
},
{
    "BRANCH": "48010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม  สาขาธาตุพนม"
},
{
    "BRANCH": "48020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม  สาขาศรีสงคราม"
},
{
    "BRANCH": "48020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม สาขาศรีสงคราม ส่วนแยกนาหว้า"
},
{
    "BRANCH": "48030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม  สาขาท่าอุเทน"
},
{
    "BRANCH": "48030100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม สาขาท่าอุเทน ส่วนแยกบ้านแพง"
},
{
    "BRANCH": "48040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม  สาขานาแก"
},
{
    "BRANCH": "48050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครพนม  สาขาเรณูนคร"
},
{
    "BRANCH": "30000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา"
},
{
    "BRANCH": "30010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาประทาย"
},
{
    "BRANCH": "30020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาพิมาย"
},
{
    "BRANCH": "30030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาโนนสูง"
},
{
    "BRANCH": "30040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาโนนไทย"
},
{
    "BRANCH": "30050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาโชคชัย"
},
{
    "BRANCH": "30060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาคง"
},
{
    "BRANCH": "30070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาบัวใหญ่"
},
{
    "BRANCH": "30080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาสีคิ้ว"
},
{
    "BRANCH": "30090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาปากช่อง"
},
{
    "BRANCH": "30100000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาสูงเนิน"
},
{
    "BRANCH": "30110000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาจักราช"
},
{
    "BRANCH": "30120000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาครบุรี"
},
{
    "BRANCH": "30130000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาด่านขุนทด"
},
{
    "BRANCH": "30140000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาปักธงชัย"
},
{
    "BRANCH": "30150000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาชุมพวง"
},
{
    "BRANCH": "30160000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา  สาขาขามสะแกแสง"
},
{
    "BRANCH": "30170000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครราชสีมา สาขาขามทะเลสอ"
},
{
    "BRANCH": "80000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช"
},
{
    "BRANCH": "80010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาทุ่งสง"
},
{
    "BRANCH": "80020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาสิชล"
},
{
    "BRANCH": "80030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาปากพนัง"
},
{
    "BRANCH": "80040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาหัวไทร"
},
{
    "BRANCH": "80050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาฉวาง"
},
{
    "BRANCH": "80060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาชะอวด"
},
{
    "BRANCH": "80070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาเชียรใหญ่"
},
{
    "BRANCH": "80080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาท่าศาลา"
},
{
    "BRANCH": "80090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาร่อนพิบูลย์"
},
{
    "BRANCH": "80100000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาลานสกา"
},
{
    "BRANCH": "80100100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาลานสกา ส่วนแยกพรหมคีรี"
},
{
    "BRANCH": "80110000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครศรีธรรมราช  สาขาทุ่งใหญ่"
},
{
    "BRANCH": "60000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์"
},
{
    "BRANCH": "60010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาตาคลี"
},
{
    "BRANCH": "60020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาชุมแสง"
},
{
    "BRANCH": "60030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาลาดยาว"
},
{
    "BRANCH": "60040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาบรรพตพิสัย"
},
{
    "BRANCH": "60050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาพยุหะคีรี"
},
{
    "BRANCH": "60060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาท่าตะโก"
},
{
    "BRANCH": "60060100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์ สาขาท่าตะโก ส่วนแยกไพศาลี"
},
{
    "BRANCH": "60070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์  สาขาหนองบัว"
},
{
    "BRANCH": "60080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนครสวรรค์ สาขาตากฟ้า"
},
{
    "BRANCH": "12000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนนทบุรี"
},
{
    "BRANCH": "12010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนนทบุรี  สาขาบางใหญ่"
},
{
    "BRANCH": "12020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนนทบุรี  สาขาบางบัวทอง"
},
{
    "BRANCH": "12030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนนทบุรี  สาขาปากเกร็ด"
},
{
    "BRANCH": "96000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส"
},
{
    "BRANCH": "96010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส  สาขาสุไหงปาดี"
},
{
    "BRANCH": "96020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส  สาขารือเสาะ"
},
{
    "BRANCH": "96030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส  สาขาตากใบ"
},
{
    "BRANCH": "96040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส  สาขาสุไหงโกลก"
},
{
    "BRANCH": "96050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดนราธิวาส  สาขาบาเจาะ"
},
{
    "BRANCH": "55000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน"
},
{
    "BRANCH": "55010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน  สาขาท่าวังผา"
},
{
    "BRANCH": "55020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน  สาขาเวียงสา"
},
{
    "BRANCH": "55030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน  สาขานาน้อย"
},
{
    "BRANCH": "55040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน  สาขาปัว"
},
{
    "BRANCH": "55050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดน่าน  สาขาเชียงกลาง"
},
{
    "BRANCH": "38000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบึงกาฬ"
},
{
    "BRANCH": "38010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบึงกาฬ สาขาเซกา"
},
{
    "BRANCH": "31000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์"
},
{
    "BRANCH": "31010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขากระสัง"
},
{
    "BRANCH": "31020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขานางรอง"
},
{
    "BRANCH": "31020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์ สาขานางรอง ส่วนแยกละหานทราย"
},
{
    "BRANCH": "31030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขาประโคนชัย"
},
{
    "BRANCH": "31040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขาสตึก"
},
{
    "BRANCH": "31050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขาพุทไธสง"
},
{
    "BRANCH": "31060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์  สาขาลำปลายมาศ"
},
{
    "BRANCH": "31070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดบุรีรัมย์ สาขาคูเมือง"
},
{
    "BRANCH": "13000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปทุมธานี"
},
{
    "BRANCH": "13010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปทุมธานี  สาขาธัญบุรี"
},
{
    "BRANCH": "13020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปทุมธานี  สาขาคลองหลวง"
},
{
    "BRANCH": "13030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปทุมธานี  สาขาลำลูกกา"
},
{
    "BRANCH": "77000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดประจวบคีรีขันธ์"
},
{
    "BRANCH": "77010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดประจวบคีรีขันธ์  สาขาหัวหิน"
},
{
    "BRANCH": "77020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดประจวบคีรีขันธ์  สาขาบางสะพาน"
},
{
    "BRANCH": "77030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดประจวบคีรีขันธ์  สาขาปราณบุรี"
},
{
    "BRANCH": "25000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปราจีนบุรี"
},
{
    "BRANCH": "25010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปราจีนบุรี  สาขากบินทร์บุรี"
},
{
    "BRANCH": "94000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปัตตานี"
},
{
    "BRANCH": "94010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปัตตานี  สาขาโคกโพธิ์"
},
{
    "BRANCH": "94020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปัตตานี  สาขาปะนาเระ"
},
{
    "BRANCH": "94030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดปัตตานี  สาขาสายบุรี"
},
{
    "BRANCH": "14000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพระนครศรีอยุธยา"
},
{
    "BRANCH": "14010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพระนครศรีอยุธยา  สาขาเสนา"
},
{
    "BRANCH": "14020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพระนครศรีอยุธยา  สาขาท่าเรือ"
},
{
    "BRANCH": "14030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพระนครศรีอยุธยา  สาขาวังน้อย"
},
{
    "BRANCH": "56000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา"
},
{
    "BRANCH": "56010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาแม่ใจ"
},
{
    "BRANCH": "56020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาดอกคำใต้"
},
{
    "BRANCH": "56030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาเชียงคำ"
},
{
    "BRANCH": "56040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาจุน"
},
{
    "BRANCH": "56050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาปง"
},
{
    "BRANCH": "56050100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพะเยา  สาขาปง ส่วนแยกเชียงม่วน"
},
{
    "BRANCH": "82000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพังงา"
},
{
    "BRANCH": "82000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพังงา ส่วนแยกเกาะยาว"
},
{
    "BRANCH": "82010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพังงา  สาขาตะกั่วป่า"
},
{
    "BRANCH": "82020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพังงา  สาขาท้ายเหมือง"
},
{
    "BRANCH": "82030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพังงา  สาขาตะกั่วทุ่ง"
},
{
    "BRANCH": "93000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพัทลุง"
},
{
    "BRANCH": "93010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพัทลุง  สาขาปากพะยูน"
},
{
    "BRANCH": "93020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพัทลุง  สาขาควนขนุน"
},
{
    "BRANCH": "93030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพัทลุง  สาขาตะโหมด"
},
{
    "BRANCH": "66000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร"
},
{
    "BRANCH": "66010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร  สาขาตะพานหิน"
},
{
    "BRANCH": "66020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร  สาขาโพทะเล"
},
{
    "BRANCH": "66030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร  สาขาบางมูลนาก"
},
{
    "BRANCH": "66040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร  สาขาโพธิ์ประทับช้าง"
},
{
    "BRANCH": "66050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิจิตร สาขาสามง่าม"
},
{
    "BRANCH": "65000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก"
},
{
    "BRANCH": "65010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขาพรหมพิราม"
},
{
    "BRANCH": "65020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขาบางระกำ"
},
{
    "BRANCH": "65030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขานครไทย"
},
{
    "BRANCH": "65040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขาวังทอง"
},
{
    "BRANCH": "65050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขาวัดโบสถ์"
},
{
    "BRANCH": "65060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดพิษณุโลก  สาขาบางกระทุ่ม"
},
{
    "BRANCH": "76000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบุรี"
},
{
    "BRANCH": "76010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบุรี  สาขาชะอำ"
},
{
    "BRANCH": "76020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบุรี  สาขาท่ายาง"
},
{
    "BRANCH": "76030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบุรี สาขาเขาย้อย"
},
{
    "BRANCH": "67000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์"
},
{
    "BRANCH": "67010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์  สาขาหล่มสัก"
},
{
    "BRANCH": "67010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์ สาขาหล่มสัก ส่วนแยกเขาค้อ"
},
{
    "BRANCH": "67020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์  สาขาวิเชียรบุรี"
},
{
    "BRANCH": "67030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์  สาขาชนแดน"
},
{
    "BRANCH": "67040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์  สาขาหนองไผ่"
},
{
    "BRANCH": "67050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเพชรบูรณ์  สาขาหล่มเก่า"
},
{
    "BRANCH": "54000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่"
},
{
    "BRANCH": "54010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่  สาขาร้องกวาง"
},
{
    "BRANCH": "54020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่  สาขาสอง"
},
{
    "BRANCH": "54030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่  สาขาวังชิ้น"
},
{
    "BRANCH": "54040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่  สาขาลอง"
},
{
    "BRANCH": "54050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแพร่  สาขาสูงเม่น"
},
{
    "BRANCH": "83000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดภูเก็ต"
},
{
    "BRANCH": "83010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดภูเก็ต สาขาถลาง"
},
{
    "BRANCH": "44000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม"
},
{
    "BRANCH": "44010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขาบรบือ"
},
{
    "BRANCH": "44020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขาเชียงยืน"
},
{
    "BRANCH": "44030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขาโกสุมพิสัย"
},
{
    "BRANCH": "44040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขาวาปีปทุม"
},
{
    "BRANCH": "44050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขาพยัคฆภูมิพิสัย"
},
{
    "BRANCH": "44060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขากันทรวิชัย"
},
{
    "BRANCH": "44070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมหาสารคาม  สาขานาเชือก"
},
{
    "BRANCH": "49000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมุกดาหาร"
},
{
    "BRANCH": "49010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดมุกดาหาร  สาขาคำชะอี"
},
{
    "BRANCH": "58000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแม่ฮ่องสอน"
},
{
    "BRANCH": "58010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแม่ฮ่องสอน  สาขาแม่สะเรียง"
},
{
    "BRANCH": "58020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดแม่ฮ่องสอน  สาขาปาย"
},
{
    "BRANCH": "00000000",
    "BRANCH_NAME": "ไม่มีสำนักงานที่ดิน"
},
{
    "BRANCH": "35000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยโสธร"
},
{
    "BRANCH": "35010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยโสธร  สาขาคำเขื่อนแก้ว"
},
{
    "BRANCH": "35020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยโสธร  สาขามหาชนะชัย"
},
{
    "BRANCH": "35030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยโสธร  สาขาเลิงนกทา"
},
{
    "BRANCH": "35040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยโสธร  สาขากุดชุม"
},
{
    "BRANCH": "95000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยะลา"
},
{
    "BRANCH": "95010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยะลา  สาขาเบตง"
},
{
    "BRANCH": "95020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยะลา  สาขายะหา"
},
{
    "BRANCH": "95030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยะลา  สาขาบันนังสตา"
},
{
    "BRANCH": "95040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดยะลา  สาขารามัน"
},
{
    "BRANCH": "45000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด"
},
{
    "BRANCH": "45010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาจตุรพักตรพิมาน"
},
{
    "BRANCH": "45020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาพนมไพร"
},
{
    "BRANCH": "45030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาเสลภูมิ"
},
{
    "BRANCH": "45040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาสุวรรณภูมิ"
},
{
    "BRANCH": "45050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาเกษตรวิสัย"
},
{
    "BRANCH": "45060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาอาจสามารถ"
},
{
    "BRANCH": "45070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาโพนทอง"
},
{
    "BRANCH": "45080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาปทุมรัตต์"
},
{
    "BRANCH": "45090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดร้อยเอ็ด  สาขาธวัชบุรี"
},
{
    "BRANCH": "85000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระนอง"
},
{
    "BRANCH": "21000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระยอง"
},
{
    "BRANCH": "21010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระยอง  สาขาแกลง"
},
{
    "BRANCH": "21020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระยอง  สาขาบ้านค่าย"
},
{
    "BRANCH": "21030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระยอง  สาขาบ้านฉาง"
},
{
    "BRANCH": "21040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดระยอง  สาขาปลวกแดง"
},
{
    "BRANCH": "70000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี"
},
{
    "BRANCH": "70010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี  สาขาบ้านโป่ง"
},
{
    "BRANCH": "70020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี  สาขาปากท่อ"
},
{
    "BRANCH": "70030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี  สาขาจอมบึง"
},
{
    "BRANCH": "70040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี  สาขาโพธาราม"
},
{
    "BRANCH": "70050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดราชบุรี  สาขาสวนผึ้ง"
},
{
    "BRANCH": "16000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลพบุรี"
},
{
    "BRANCH": "16010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลพบุรี  สาขาโคกสำโรง"
},
{
    "BRANCH": "16020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลพบุรี  สาขาชัยบาดาล"
},
{
    "BRANCH": "16030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลพบุรี  สาขาบ้านหมี่"
},
{
    "BRANCH": "16040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลพบุรี  สาขาพัฒนานิคม"
},
{
    "BRANCH": "52000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง"
},
{
    "BRANCH": "52010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาแม่ทะ"
},
{
    "BRANCH": "52020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาเสริมงาม"
},
{
    "BRANCH": "52030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาห้างฉัตร"
},
{
    "BRANCH": "52040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาเถิน"
},
{
    "BRANCH": "52050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาแจ้ห่ม"
},
{
    "BRANCH": "52060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาสบปราบ"
},
{
    "BRANCH": "52070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขางาว"
},
{
    "BRANCH": "52080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาแม่พริก"
},
{
    "BRANCH": "52090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาวังเหนือ"
},
{
    "BRANCH": "52100000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำปาง  สาขาเกาะคา"
},
{
    "BRANCH": "51000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน"
},
{
    "BRANCH": "51000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน ส่วนแยกบ้านธิ"
},
{
    "BRANCH": "51010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน  สาขาป่าซาง"
},
{
    "BRANCH": "51020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน  สาขาบ้านโฮ่ง"
},
{
    "BRANCH": "51030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน  สาขาลี้"
},
{
    "BRANCH": "51040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดลำพูน  สาขาแม่ทา"
},
{
    "BRANCH": "42000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเลย"
},
{
    "BRANCH": "42010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเลย  สาขาเชียงคาน"
},
{
    "BRANCH": "42020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเลย  สาขาวังสะพุง"
},
{
    "BRANCH": "42030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเลย  สาขาภูกระดึง"
},
{
    "BRANCH": "42040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดเลย  สาขาด่านซ้าย"
},
{
    "BRANCH": "33000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ"
},
{
    "BRANCH": "33010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขาราษีไศล"
},
{
    "BRANCH": "33020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขาอุทุมพรพิสัย"
},
{
    "BRANCH": "33030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขาปรางค์กู่"
},
{
    "BRANCH": "33040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขากันทรลักษ์"
},
{
    "BRANCH": "33050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขาขุขันธ์"
},
{
    "BRANCH": "33060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขากันทรารมย์"
},
{
    "BRANCH": "33070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดศรีสะเกษ  สาขาขุนหาญ"
},
{
    "BRANCH": "47000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร"
},
{
    "BRANCH": "47000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร ส่วนแยกกุสุมาลย์"
},
{
    "BRANCH": "47010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาพังโคน"
},
{
    "BRANCH": "47020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาวานรนิวาส"
},
{
    "BRANCH": "47020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร สาขาวานรนิวาส ส่วนแยกบ้านม่วง"
},
{
    "BRANCH": "47030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาอากาศอำนวย"
},
{
    "BRANCH": "47040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาสว่างแดนดิน"
},
{
    "BRANCH": "47050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาพรรณานิคม"
},
{
    "BRANCH": "47060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสกลนคร  สาขาวาริชภูมิ"
},
{
    "BRANCH": "90000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา"
},
{
    "BRANCH": "90010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาหาดใหญ่"
},
{
    "BRANCH": "90010300",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาหาดใหญ่ ส่วนแยกบางกล่ำ"
},
{
    "BRANCH": "90020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาสะเดา"
},
{
    "BRANCH": "90030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาจะนะ"
},
{
    "BRANCH": "90040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาระโนด"
},
{
    "BRANCH": "90050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาสทิงพระ"
},
{
    "BRANCH": "90060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขารัตภูมิ"
},
{
    "BRANCH": "90070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาเทพา"
},
{
    "BRANCH": "90080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขานาทวี"
},
{
    "BRANCH": "90090000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสงขลา  สาขาสิงหนคร"
},
{
    "BRANCH": "91000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสตูล"
},
{
    "BRANCH": "91010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสตูล  สาขาละงู"
},
{
    "BRANCH": "11000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรปราการ"
},
{
    "BRANCH": "11010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรปราการ  สาขาบางพลี"
},
{
    "BRANCH": "11020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรปราการ  สาขาพระประแดง"
},
{
    "BRANCH": "11030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรปราการ สาขาพระสมุทรเจดีย์"
},
{
    "BRANCH": "75000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรสงคราม"
},
{
    "BRANCH": "74000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรสาคร"
},
{
    "BRANCH": "74010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรสาคร  สาขากระทุ่มแบน"
},
{
    "BRANCH": "74020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสมุทรสาคร  สาขาบ้านแพ้ว"
},
{
    "BRANCH": "27000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระแก้ว"
},
{
    "BRANCH": "27010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระแก้ว  สาขาอรัญประเทศ"
},
{
    "BRANCH": "19000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระบุรี"
},
{
    "BRANCH": "19010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระบุรี  สาขาแก่งคอย"
},
{
    "BRANCH": "19020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระบุรี  สาขาหนองแค"
},
{
    "BRANCH": "19030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสระบุรี  สาขาพระพุทธบาท"
},
{
    "BRANCH": "17000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสิงห์บุรี"
},
{
    "BRANCH": "64000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุโขทัย"
},
{
    "BRANCH": "64010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุโขทัย  สาขาสวรรคโลก"
},
{
    "BRANCH": "64020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุโขทัย  สาขาศรีสัชนาลัย"
},
{
    "BRANCH": "64030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุโขทัย  สาขาศรีสำโรง"
},
{
    "BRANCH": "64040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุโขทัย  สาขากงไกรลาศ"
},
{
    "BRANCH": "72000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี"
},
{
    "BRANCH": "72010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาสองพี่น้อง"
},
{
    "BRANCH": "72020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาอู่ทอง"
},
{
    "BRANCH": "72030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาเดิมบางนางบวช"
},
{
    "BRANCH": "72040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาสามชุก"
},
{
    "BRANCH": "72050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาศรีประจันต์"
},
{
    "BRANCH": "72060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุพรรณบุรี  สาขาดอนเจดีย์"
},
{
    "BRANCH": "84000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี"
},
{
    "BRANCH": "84010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาเกาะสมุย"
},
{
    "BRANCH": "84010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาเกาะสมุย ส่วนแยกเกาะพะงัน"
},
{
    "BRANCH": "84020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาบ้านนาสาร"
},
{
    "BRANCH": "84030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาไชยา"
},
{
    "BRANCH": "84030100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาไชยา  ส่วนแยกท่าฉาง"
},
{
    "BRANCH": "84040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาบ้านตาขุน"
},
{
    "BRANCH": "84050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาเวียงสระ"
},
{
    "BRANCH": "84060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขากาญจนดิษฐ์"
},
{
    "BRANCH": "84060100",
    "BRANCH_NAME": "\nสำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขากาญจนดิษฐ์ ส่วนแยกดอนสัก"
},
{
    "BRANCH": "84070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาพุนพิน"
},
{
    "BRANCH": "84080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุราษฎร์ธานี  สาขาพระแสง"
},
{
    "BRANCH": "32000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์"
},
{
    "BRANCH": "32010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาท่าตูม"
},
{
    "BRANCH": "32020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาศีขรภูมิ"
},
{
    "BRANCH": "32020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์ สาขาศีขรภูมิ ส่วนแยกสำโรงทาบ"
},
{
    "BRANCH": "32030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาปราสาท"
},
{
    "BRANCH": "32040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาสังขะ"
},
{
    "BRANCH": "32050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาจอมพระ"
},
{
    "BRANCH": "32060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขารัตนบุรี"
},
{
    "BRANCH": "32070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดสุรินทร์  สาขาชุมพลบุรี"
},
{
    "BRANCH": "43000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดหนองคาย"
},
{
    "BRANCH": "43020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดหนองคาย  สาขาโพนพิสัย"
},
{
    "BRANCH": "43030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดหนองคาย  สาขาท่าบ่อ"
},
{
    "BRANCH": "39000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดหนองบัวลำภู"
},
{
    "BRANCH": "39010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดหนองบัวลำภู  สาขาศรีบุญเรือง"
},
{
    "BRANCH": "15000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอ่างทอง"
},
{
    "BRANCH": "37000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอำนาจเจริญ"
},
{
    "BRANCH": "37000100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอำนาจเจริญ ส่วนแยกพนา"
},
{
    "BRANCH": "37010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอำนาจเจริญ  สาขาหัวตะพาน"
},
{
    "BRANCH": "41000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี"
},
{
    "BRANCH": "41010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาหนองหาน"
},
{
    "BRANCH": "41010100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาหนองหาน ส่วนแยกทุ่งฝน"
},
{
    "BRANCH": "41020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขากุมภวาปี"
},
{
    "BRANCH": "41020100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขากุมภวาปี ส่วนแยกโนนสะอาด"
},
{
    "BRANCH": "41020200",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขากุมภวาปี ส่วนแยกศรีธาตุ"
},
{
    "BRANCH": "41030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาบ้านดุง"
},
{
    "BRANCH": "41040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาบ้านผือ"
},
{
    "BRANCH": "41040100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาบ้านผือ ส่วนแยกน้ำโสม"
},
{
    "BRANCH": "41050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาเพ็ญ"
},
{
    "BRANCH": "41060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขากุดจับ"
},
{
    "BRANCH": "41070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุดรธานี  สาขาหนองวัวซอ"
},
{
    "BRANCH": "53000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุตรดิตถ์"
},
{
    "BRANCH": "53010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุตรดิตถ์  สาขาตรอน"
},
{
    "BRANCH": "53020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุตรดิตถ์  สาขาน้ำปาด"
},
{
    "BRANCH": "53030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุตรดิตถ์  สาขาพิชัย"
},
{
    "BRANCH": "61000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุทัยธานี"
},
{
    "BRANCH": "61010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุทัยธานี  สาขาบ้านไร่"
},
{
    "BRANCH": "61020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุทัยธานี  สาขาหนองฉาง"
},
{
    "BRANCH": "34000000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี"
},
{
    "BRANCH": "34010000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาเขื่องใน"
},
{
    "BRANCH": "34020000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาวารินชำราบ"
},
{
    "BRANCH": "34030000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาเดชอุดม"
},
{
    "BRANCH": "34040000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาน้ำยืน"
},
{
    "BRANCH": "34050000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาม่วงสามสิบ"
},
{
    "BRANCH": "34060000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาตระการพืชผล"
},
{
    "BRANCH": "34060100",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี สาขาตระการพืชผล ส่วนแยกศรีเมืองใหม่"
},
{
    "BRANCH": "34070000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาพิบูลมังสาหาร"
},
{
    "BRANCH": "34080000",
    "BRANCH_NAME": "สำนักงานที่ดินจังหวัดอุบลราชธานี  สาขาเขมราฐ"
},
]



const Zones = [
  { zone: '47', id: 47 },
  { zone: '48', id: 48 },
]

const Menus = [
  { label: 'โฉนดที่ดิน', year: 4  },
  { label: 'น.ส. 3ก.', year: 5  },
]
