import { Autocomplete, Button, Grid, Typography, Avatar, Paper } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import Map from '../../map'
import React from 'react'


export default function Mainreport() {

    const Iconavatar = styled(Avatar)({
        overflow: 'hidden', 
        width: 60, 
        height: 60, 
        marginTop: '', 
        marginLeft: '-22px', 
        border: '2px solid #8AD2B0', 
        backgroundColor: '#fff', 
        color:'#8AD2B0'
      });

  return (
    <div>
        <Box sx= {{backgroundColor: '#fff', minWidth: '1450px'}}>
            <Grid container sx= {{height: '800px'}}>
                <Paper 
                sx= {{
                    backgroundColor: '#fff', 
                    borderRight: '1px solid',
                    background: 'url(/report.png) no-repeat bottom',
                    width: '45%'
                    }}
                    >
                    <Grid container direction= "column" sx= {{alignItems: 'center'}}>
                        <Grid sx= {{backgroundColor: '#00A09D', borderRadius: '5px', mt: 5}}>
                            <Typography variant='h6' fontWeight= "bold" className= {styles.kanit1} sx= {{px: 3, color: '#fff'}}>
                                รายงาน
                            </Typography>
                        </Grid>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '600px', 
                                height: '50px',
                                mt: '50px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานบัญชีการประเมินราคาที่ดินไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '600px', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปจำนวนแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน ประจำรายเดือน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '600px', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                    รายงานการเทียบเคียงแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '600px', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง 
                                        จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                            <Button 
                            sx= {{
                                border: '2px solid #8AD2B0', 
                                width: '600px', 
                                height: '50px',
                                mt: '20px',
                                color: '#112A59',
                                justifyContent: 'flex-start',
                                '&:hover': {
                                    backgroundColor: '#8AD2B0',
                                    color: '#fff',
                                    transform: 'scale(1.02)'
                                    },
                                }}
                                >
                                <Iconavatar>
                                    <BsFileEarmarkBarGraph size= {35}/>
                                </Iconavatar>
                                    <Typography variant='button' sx= {{ml: 1, fontFamily: 'kanit',}}>
                                        รายงานสรุปผลการดำเนินงานระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                    </Typography>
                            </Button>
                    </Grid>
                </Paper>
                
                <Grid sx= {{width: '55%'}}>
                    <Grid container 
                    sx= {{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        height: '100%',
                        }}
                        > 
                        <Grid sx= {{width: '98%', height: '98%' , border: '1px solid',backgroundColor: '#fff', overflow: 'hidden'}}>
                            <Map/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    </div>
  )
}
