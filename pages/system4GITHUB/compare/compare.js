import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import { GiGears } from "react-icons/gi";
import Image from 'next/image'
import React from 'react'
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Comparelist from './comparelist'
import ComparaError from './compareError'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Compare() {

    const Cpbutton = styled(Button)({
        backgroundColor: '#2F4266',
        border: '1px solid #2F4266', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '70px', 
        width: '550px', 
        borderRadius: '8px', 
        boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#2F4266',
            transform: 'scale(1.02)'
          },
      });

      const [show, setShow] = React.useState(true);
      const [open, setOpen] = React.useState(false);


  return (
    <div>
        { show ?
        <Box>
            <Grid container 
            sx= {{
                width: '850px', 
                m: '5%', 
                borderRadius: '8px', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#fff'
                }}
                >
                <Grid sx= {{
                    backgroundColor: '#2F4266', 
                    width: '100%', 
                    borderRadius: '8px 8px 0px 0px',
                    py: '0.5%'
                    }}
                    >
                    <Typography variant='text' className={styles.kanit} color= "#fff" 
                    fontSize= "20px" 
                    fontWeight= "bold" 
                    sx= {{ml: '5%'}}
                    >
                        เทียบเคียง
                    </Typography>
                </Grid>
                <Grid container 
                sx= {{
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    m: '2%', 
                    width: '90%'
                    }}
                    >
                    <Grid >
                        <Grid sx= {{
                            backgroundColor: '#2F4266', 
                            borderRadius: '8px', 
                            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
                            p: '10%'
                            }}
                            >
                            <Image src="/vector.png" alt="Banner" width={92}  height={101}/>
                        </Grid>
                    </Grid>
                    <Grid >
                        <Cpbutton variant='contained' onClick={() => {setShow(false); setOpen(true);}}>
                            <GiGears size= {55}/>
                            <Typography variant='button' fontWeight= "bold" fontSize= "18px" className= {styles.kanit} 
                            sx= {{ml: '5%'}}
                            >
                                กดเทียบเคียง
                            </Typography>
                        </Cpbutton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        : null }

        { open ?
<Dialog
fullScreen
open={open}
onClose={() => {setOpen(false); setShow(true);}}
TransitionComponent={Transition}
>
<AppBar sx={{ position: 'relative' }}>
  <Toolbar sx={{ bgcolor: '#2F4266'}}>
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => {setOpen(false); setShow(true);}}
      aria-label="close"
    >
      <CloseIcon />
    </IconButton>
    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" className= {styles.kanit}>
      เทียบเคียง
    </Typography>
    <Button autoFocus color="inherit" onClick={() => {setOpen(false); setShow(true);}}>
      ปิด
    </Button>
  </Toolbar>
</AppBar>
<Comparelist/>
</Dialog>
        : null}

    </div>
  )
}