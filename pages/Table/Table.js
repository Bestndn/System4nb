import React from 'react';
import DataTable from './Datanb';
import { ButtonBase, Divider, Grid, Typography } from '@mui/material';
import styles from '../../styles/Home.module.css'
// import { saveAs } from 'file-saver';
// import axios from 'axios';

export default function TableSearch(props) {
  const [datalist, setDataList] = React.useState([])
//   const setDate = () => {
//     let nawData = []
//     let data = props.data
//     data.forEach((el) => {
//       let dataitems = el
//       let actions = (
//         <ButtonAction
//           onClickExcel={() => onClickExcel(dataitems)}
//           onClickPDF={() => onClickPDF(dataitems)}
//           onClickCSV={() => onClickCSV(dataitems)}
//           onClickTXT={() => onClickTXT(dataitems)}
//         />
//       )
//       dataitems['actions'] = actions
//       nawData.push(dataitems)
//     })
//     setDataList(nawData)
//   }

//   const onClickExcel = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportExcel(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportExcel(el)
//     }
//   }
  
//   const onClickPDF = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportPdf(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportPdf(el)
//     }
//   }
  
//   const onClickCSV = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportCsv(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportCsv(el)
//     }
//   }
  
//   const onClickTXT = (el) => {
//     if(el.KEY_ == '1'){
//       structureReportTxt(el)
//     }
//     if(el.KEY_ == '2'){
//       un_structureReportTxt(el)
//     }
//   }

//   const structureReportExcel = async (el) => {
//     try {
//       let res = await StuctureReportXlsx.downloadExcel(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportExcel = async (el) => {
//     try {
//       let res = await UnStuctureReportXlsx.downloadExcel(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   const structureReportPdf = async (el) => {
//     try {
//       let res = await StuctureReportPdf.downloadPdf(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportPdf = async (el) => {
//     try {
//       let res = await UnStuctureReportPdf.downloadPdf(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const structureReportTxt = async (el) => {
//     try {
//       let res = await StuctureReportTxt.downloadTxt(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportTxt = async (el) => {
//     try {
//       let res = await UnStuctureReportTxt.downloadTxt(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   const structureReportCsv = async (el) => {
//     try {
//       let res = await StuctureReportCsv.downloadCsv(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   const un_structureReportCsv = async (el) => {
//     try {
//       let res = await UnStuctureReportCsv.downloadCsv(el)
//     } catch (e) {
//       console.log(e);
//     }
//   }


let colum = [
    {
      name: "ลำดับ",
      listname: "",
    },
    {
      name: "โฉนดที่ดินเลขที่",
      listname: "",
    },
    {
      name: "อำเภอ",
      listname: "",
    },
    {
      name: "ตำบล",
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
      name: "เนื้อที่ไร่-งาน-ตร.ว.",
      listname: "",
    },
  ];

  let colums = [
    {
      name: "โฉนดที่ดินเลขที่",
      listname: "",
    },
    {
      name: "อำเภอ",
      listname: "",
    },
    {
      name: "ตำบล",
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
      name: "เนื้อที่ไร่-งาน-ตร.ว.",
      listname: "",
    },
{
      name: "ราคาประเมินบาท / ตร.ว.",
      listname: "",
    },

{
      name: "ประเภทบัญชีที่ประกาศ",
      listname: "",
    },

{
      name: "เล่มที่",
      listname: "",
    },
{
      name: "หน้าที่",
      listname: "",
    },
{
      name: "วัน / เดือน / ปี",
      listname: "",
    },

  ];

//   React.useEffect(() => {
//     setDate()
//   }, [props.data])

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center', bgcolor: 'white', p: '1%' }}>
        <Grid sx={{ width: '100%' }}>
          <DataTable data={datalist} colum={colum} colums={colums} sx={{ overflow: 'scroll' }} />
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