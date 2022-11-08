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
import DescriptionIcon from '@mui/icons-material/Description';

const theme = createTheme();

export default function Importv2() {

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: 800 }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10}}>
         <Button variant="contained" className={styles.cat}> 
            <Typography variant="text" className={styles.kanitG}>
                รายงาน
            </Typography>
         </Button>
        </Box>
        <Box sx={{ p: 5 }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: 'green'}}><DescriptionIcon /></Avatar>
            <Box sx={{ p: 2}}>
            <Typography variant="text" className={styles.kanit}>
              รายงานบัญชีการประเมินที่ดินไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>




        <Grid item xs={false} sm={4} md={6} sx={{ width: '100%' }}
        >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929615.196018716!2d92.43077059157704!3d12.903464108699563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1665041235384!5m2!1sth!2sth"
        width="100%"
        height={800}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
        </Grid>
      </Grid>


    </ThemeProvider>
    </div>
  );
}