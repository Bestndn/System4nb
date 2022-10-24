import { Box, Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import { GiGears } from "react-icons/gi";
import Image from 'next/image'
import React from 'react'

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

  return (
    <div>
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
                            <Image src="/vector.png" alt="Banner" width={`92px`}  height={'101px'}/>
                        </Grid>
                    </Grid>
                    <Grid >
                        <Cpbutton variant='contained'>
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
    </div>
  )
}
