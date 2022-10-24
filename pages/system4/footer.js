import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';

export default function Footer() {
  return (
    <div>

     <Box sx={{ minWidth: '1200px' }}>
      <Grid container sx={{
        bgcolor: '#2F4266', 
        justifyContent: 'center', 
        alignItem: 'center', 
        padding: '1%', 
        }}>
        <Typography color="white">
          Copyright  © The Treasury Department
        </Typography>
      </Grid>
     </Box>


  </div>
  );
} 