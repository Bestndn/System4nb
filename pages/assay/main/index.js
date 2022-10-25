import React from 'react'
import { Grid } from '@mui/material'
import Navbar from './navbar'
import Map from './map'
import Footer from './footer'

export default function Insys4() {
  return (
    <div>

        <Grid sx={{ bgcolor: 'white' }}>
            
            <Navbar/>

            <Map/>
           
            <Footer/>

        </Grid>

    </div>
  )
}