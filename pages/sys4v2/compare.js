import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
import styles from './system4.module.css';


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
    1-2-0,
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
      1-2-0,
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
        1-2-0,
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
          1-2-0,
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
            1-2-0,
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillCloseCircle}><AiFillCloseCircle size={40}/></Fab>, 
            <Fab size="small" color="secondary" aria-label="add" className={styles.AiFillMinusCircle}><AiFillMinusCircle size={40}/></Fab>,
            '',
            ),
];

const theme = createTheme();

const top100Films = [
    { label: 'ทดสอบ', year: 1994 },];

export default function Importv2() {

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


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    

  return (
    <div>

      <Grid container component="main" sx={{ minHeight: 800, minWidth: 1100 }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1}}>
            <Typography variant="text" className={styles.kanitG}>
            เทียบเคียงแปลงที่ดินไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
        </Box>
        <Grid>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
      {/* <caption><Pagination count={10} variant="outlined" shape="rounded"/></caption> */}
        <TableHead>
          <TableRow sx={{ bgcolor: '#00A09D' }}>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>ลำดับ</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>โฉนดที่ดินเลขที่</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>หน้าสำรวจ</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>ระวาง</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>เลขที่ดิน</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>เนื้อที่ไร่-งาน-ตร.ว.</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>สถานะนำเข้า</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}>ไปแผนที่</TableCell>
            <TableCell align="center" className={styles.kanit} sx={{ color: 'white' }}> </TableCell>
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
        <Grid container sx={{ mt: 1}}>
        <Grid className={styles.kanitM}>จำนวนทั้งหมด 5 รายการ</Grid>
        <Grid className={styles.kanitM}>นำเข้าได้ 2</Grid>
        <Grid className={styles.kanitM}>นำเข้าไม่ได้ 3</Grid>

        <Grid sx={{ ml: '42%', mt: -2}}>
        <Pagination count={10} variant="outlined" shape="rounded" color="primary"/>
        </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: 'flex-end', mt: 3}}>
        <Button variant="contained" sx={{ mr: 10}} className={styles.buttonTe}>ยืนยันการเทียบเคียง</Button>
        </Grid>
        



        </Grid>




        <Grid item xs={false} sm={4} md={6}
        >
        <Grid sx={{ minHeight: 800 }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929615.196018716!2d92.43077059157704!3d12.903464108699563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1665041235384!5m2!1sth!2sth"
        width={800}
        height={800}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
        </Grid>
        </Grid>
      </Grid>



    </div>
  );
}