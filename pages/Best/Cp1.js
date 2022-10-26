import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import React from 'react'
import { GiGears } from "react-icons/gi";
import { IoGitCompareOutline } from "react-icons/io5";


export default function Pricereport() {
    
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
      

  return (
    <div>
        <Box sx= {{position: 'absolute'}}>
            <Grid container 
            sx= {{
                width: '900px', 
                borderRadius: '10px', 
                boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', 
                m: '1.5%', 
                backgroundColor: '#fff'
                }}
                >
                <Grid container sx= {{backgroundColor: '#2F4266', borderRadius: '10px 10px 0px 0px', py: '1%'}}>
                    <Typography variant='text' className= {styles.kanit} color= "#fff" sx= {{ml: '5%'}}>
                        รายงานเผยแพร่ข้อมูล
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'space-evenly'}}>
                    <Grid 
                    sx= {{
                        backgroundColor: '#2F4266', 
                        color: '#fff', 
                        px: '2%', 
                        py: '3.5%', 
                        my: '1%', 
                        borderRadius: '10px', 
                        boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)', 
                        height: '130px'
                        }}
                        >
                        <IoGitCompareOutline size={60}/>
                    </Grid>
                    <Grid sx= {{my: '1%', width: '85%'}}>
                        <Grid container 
                        sx= {{
                            width: '100%', 
                            height: '100%', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                            }}
                            >
                            <Grid>
                                <Cpbutton variant='contained'>
                                    <GiGears size= {55}/>
                                    <Typography variant='button' fontSize= "18px" className= {styles.kanit} 
                                        sx= {{ml: '5%'}}
                                        >
                                    กดเทียบเคียง
                                    </Typography>
                                </Cpbutton>
                            </Grid>  
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
