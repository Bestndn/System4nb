import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import styles from '../../../styles/system4v2.module.css';

export default function Footer() {
  return (
    <Box>
      <Grid container sx={{
        bgcolor: '#00A09D', 
        justifyContent: 'center', 
        alignItem: 'center', 
        padding: '1%',
        }}>
          <Typography className={styles.kanit} color="white">Copyright  © The Treasury Department</Typography>

      </Grid>
    </Box>



  );
} 