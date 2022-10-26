import React from 'react'
import { Grid } from '@mui/material'
import Map from './map'
import Tab from './Tab'

export default function Insys4() {
  return (
    <div>

        <Grid sx={{ bgcolor: 'white'}}>
            
            <Tab/>

            
            <Map/>
            

        </Grid>

    </div>
  )
}