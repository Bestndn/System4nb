import React from 'react';
import DataTable from './Data';
import { ButtonBase, Divider, Grid, Typography } from '@mui/material';
import styles from '../../../styles/Home.module.css'
import { saveAs } from 'file-saver';
import axios from 'axios';

export default function TableSearch(props) {
  const [datalist, setDataList] = React.useState([])
  


  let colum = [
    {
      name: "ลำดับ",
      listname: "",
    },
    {
      name: "โฉนดที่ดิน เลขที่",
      listname: "",
    },
    {
      name: "หน้าสำรวจ",
      listname: "",
    },
    {
      name: "ระวาง",
      listname: "",
    },
    {
      name: "เลขที่ดิน",
      listname: "",
    },
    {
      name: "เนื้อที่ดินไร่-งาน-ตร.ว.",
      listname: "",
    },
    {
      name: "สถานะนำเข้า",
      listname: "",
    },
    {
      name: "ไปแผนที่",
      listname: "",
    },
    {
      name: "",
      listname: "",
    },
  ];

  

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center', bgcolor: 'white', p: '1%' }}>
        <Grid sx={{ width: '90%' }}>
          <DataTable data={datalist} colum={colum} sx={{ overflowX: 'scroll' }} />
        </Grid>
      </Grid>
    </div>
  );
}

function ButtonAction(props) {
  return (
    <Grid container  sx= {{justifyContent: 'space-evenly'}}>
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#009D23', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickExcel}
      >
        <Typography variant='text' className={styles.kanit} color="white">Excel</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#E20000', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickPDF}
      >
        <Typography variant='text' className={styles.kanit} color="white">PDF</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#266F36', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickCSV}
      >
        <Typography variant='text' className={styles.kanit} color="white">CSV</Typography>
      </ButtonBase>
        <Divider orientation="vertical" flexItem color="gray" />
      <ButtonBase variant='contained'
        sx={{ bgcolor: '#3D39FF', borderRadius: '4px', width: '20%' }}
        onClick={props.onClickTXT}
      >
        <Typography variant='text' className={styles.kanit} color="white">TXT</Typography>
      </ButtonBase>
    </Grid>
  )
}