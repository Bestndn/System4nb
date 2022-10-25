import React from 'react'
import { Grid } from '@mui/material'
import Navbar from '../pages/system4/navbar'
import Map from '../pages/map'
// import Footer from '../pages/system4footer'

export default function Insys4() {
  return (
    <div>

        <Grid sx={{ bgcolor: 'white' }}>
            
            <Navbar/>

            <Map/>

            {/* <Footer/> */}

        </Grid>

    </div>
  )
}