import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import styles from '../../../styles/Home.module.css';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import React from 'react'
import { HiOutlineDocumentChartBar } from "react-icons/hi2";


export default function Report() {
    
    const Searchbutton = styled(Button)({
        padding: '1%',
        fontFamily: 'kanit',
        width: '120px',
        border: '1px solid #2F4266',
        borderRadius: '8px', 
        backgroundColor: '#2F4266', 
        color: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#fff',
        color: '#2F4266',
        transform: 'scale(1.02)'
        },
      });
    const Typographytext = styled(Typography)({
        fontFamily: 'kanit',
        color: '#112A59',
        marginLeft: '2%',
        marginTop: '1%'
      });
      

  return (
    <div>
        <Box sx= {{position: 'absolute', width: '100%', minWidth: '1200px'}}>
        <Grid container sx= {{justifyContent: 'center'}}>
            <Grid sx= {{width: '1000px', borderRadius: '10px', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', mt: '1%', backgroundColor: '#fff'}}>
                <Grid container sx= {{backgroundColor: '#2F4266', borderRadius: '10px 10px 0px 0px', py: '1%'}}>
                    <Typography variant='text' className= {styles.kanit} color= "#fff" sx= {{ml: '5%'}}>
                        รายงานเผยแพร่ข้อมูล
                    </Typography>
                </Grid>
                <Grid container sx= {{justifyContent: 'space-evenly'}}>
                    <Grid sx= {{backgroundColor: '#2F4266', color: '#fff', px: '2%', py: '3.5%', mt: '1%', borderRadius: '10px', boxShadow: '7px 0px 4px rgba(0, 0, 0, 0.25)', height: '130px'}}>
                        <HiOutlineDocumentChartBar size={60}/>
                    </Grid>
                    <Grid sx= {{mt: '1%', width: '85%'}}>
                        <Grid container sx= {{width: '100%'}}>
                            
                                <Typographytext variant='texts'>
                                1. รายงานบัญชีการประเมินราคาที่ดินไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                </Typographytext>
                                <Typographytext variant='texts'>
                                2. รายงานสรุปจำนวนแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน ประจำรายเดือน
                                </Typographytext>
                                <Typographytext variant='texts'>
                                3. รายงานการเทียบเคียงแปลงที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                </Typographytext>
                                <Typographytext variant='texts'>
                                4. รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                </Typographytext>
                                <Typographytext variant='texts'>
                                5. รายงานสรุปผู้บริหารแสดงพื้นที่ที่มีการดำเนินการเทียบเคียง จากระบบการประเมินราคาที่ดินที่ไม่ปรากฏในบัญชีราคาประเมินที่ดิน
                                </Typographytext>
                            
                        </Grid>
                    </Grid>
                        <Grid container sx= {{justifyContent: 'center', mt: '2%' , mb: '2%'}}>
                            <Searchbutton variant='contained' startIcon= {<FindInPageRoundedIcon/>}
                            >
                            ค้นหา
                            </Searchbutton>
                        </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    </div>
  )
}