import React from 'react';
import DataTable from './dataR';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import styles from '../../../styles/Home.module.css'

export default function TableSearch(props) {
  const [dataList, setDataList] = React.useState([])

  

  let colum = [
    
  ];


  return (
    <div>
      <Grid >
        <Grid item >
          <DataTable data={dataList} colum={colum}  sx={{ overflowX: 'scroll' }}/>
        </Grid>
      </Grid>
    </div>
  );
}

