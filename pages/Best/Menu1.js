import React from 'react'
import { Box, Grid, Typography, Button, Link } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import Fab from '@mui/material/Fab';
import { GiExitDoor } from "react-icons/gi";
import Username1 from './User'



export default function Menu() {

    const BackgroundImage = styled(Box)({
        backgroundColor: '#fff', 
        height: '800px', 
        backgroundImage: 'url(/image2.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'bottom',
      });
    
      const Menubutton = styled(Button)({
        backgroundColor: '#fff',
        color: 'black', 
        height: '100px',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      });

      const Exitbutton = styled(Button)({
        borderRadius: '20px', 
        width: '170px', 
        height: '45px', 
        backgroundColor: '#E64D3B', 
        color: '#fff', 
        justifyContent: 'space-evenly',
        zIndex: '300',
        fontFamily: [
            'kanit',
          ].join(','),
          '&:hover': {
            backgroundColor: '#fff',
            color: '#E64D3B',
            transform: 'scale(1.02)'
          },
      });
      
      const Username = styled(Fab)({
        padding: '0.1%', 
        borderRadius: '50px', 
        width: '200px', 
        background: '#fff', 
        marginRight: '2%', 
        marginTop: '1%', 
        height: '45px', 
        justifyContent: 'flex-start',
        border: '1px solid #ECECEC',
        zIndex: '300',
        fontFamily: [
            'kanit',
          ].join(','),
          '&:hover': {
            backgroundColor: '#eeeeee',
            transform: 'scale(1.02)'
          },
      });

  return (
<div>
    <BackgroundImage sx= {{minWidth: '780px'}}>
        <Grid container sx= {{justifyContent: 'flex-end',height: '260px'}}>
            <Grid sx= {{mr: '1%', mt: '1%'}}>
                <Username1/>
            </Grid>
        </Grid>
        
        <Grid container sx= {{height: '260px'}}>
            <Grid container sx= {{justifyContent: 'space-evenly'}}>
                <Box> 
                    <Menubutton variant= "contained" className= {styles.brdrleft1}>
                        <Typography variant= "button" fontWeight= "bold" className= {styles.kanit1} >
                            ระบบบริหารจัดการข้อมูลในรูปแบบ Data Leke
                        </Typography>
                    </Menubutton>
                </Box>
                <Grid >
                    <Menubutton variant= "contained" className= {styles.brdrleft2}>
                        <Typography variant= "button" fontWeight= "bold" className= {styles.kanit1}>
                            ระบบการประเมินราคาที่ดินที่สำหรับเอกสารสิทธิ
                            ประเภทอื่นนอกเหนือจาดโฉนดที่ดินและ
                            หนังสือรับรองการทำประโยชน์ (น.ส. 3ก.)
                        </Typography>
                    </Menubutton>
                </Grid>
            </Grid>
            <Grid container sx= {{justifyContent: 'space-evenly', mt: '4%'}}>
                <Grid >
                <Link
                    href={'./Menu1.js'}
                    underline="none"
                   >
                    <Menubutton variant= "contained" className= {styles.brdrleft3}>
                        <Typography variant= "button" fontWeight= "bold" className= {styles.kanit1} >
                            ระบบการประเมินราคาที่ดินที่ไม่ปรากฎ
                            ในบัญชีราคาประเมินที่ดิน
                        </Typography>
                    </Menubutton>
                </Link>
                </Grid>
                <Grid >
                    <Menubutton variant= "contained" className= {styles.brdrleft4}>
                        <Typography variant= "button" fontWeight= "bold" className= {styles.kanit1}>
                            ระบบเชื่อมโยงแลกเปลี่ยนข้อมูล
                        </Typography>
                    </Menubutton>
                </Grid>
            </Grid>
        </Grid>

        <Grid container sx= {{justifyContent: 'flex-end', alignItems: 'flex-end' ,height: '260px'}}>
            <Link 
            href={'../'}
            sx= {{mr: '1%', mb: '3%'}} 
            underline="none"
            >
            <Exitbutton>
                <Typography variant= "button" className= {styles.kanit} fontWeight= "bold">
                    ออกจากระบบ
                </Typography>
                <GiExitDoor size= {25}/>
            </Exitbutton>
            </Link>
        </Grid>
    </BackgroundImage>
</div>
  )
}