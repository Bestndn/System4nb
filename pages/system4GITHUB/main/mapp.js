import React from 'react'
import { Grid } from '@mui/material'



export default function Mapp() {
  return (
    <div>
      <Grid sx={{ bgcolor: '#2F4266', minWidth: '1200px'}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929615.196018716!2d92.43077059157704!3d12.903464108699563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1665041235384!5m2!1sth!2sth"
    width="100%"
    height={800}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    />
      </Grid>
    </div>
  )
}