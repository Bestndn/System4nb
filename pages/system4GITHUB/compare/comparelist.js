import React from 'react'
import { Autocomplete, Box, Button, Grid, InputLabel, TextField, Typography, Radio, Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { GiSave } from "react-icons/gi";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Snackbar from '@mui/material/Snackbar';
import { SiOpenstreetmap } from "react-icons/si";
import MuiAlert from '@mui/material/Alert';
import styles from '../../../styles/Home.module.css';
import Modal from '@mui/material/Modal';

import CompareError from './compareError'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  zIndex: 800,
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const optionTypes = [
    { key: '1', title: 'Structure' },
    { key: '2', title: 'Un-Structure' }
]

export default function Inputlandplot() {

    const [open, setOpen] = React.useState(false);


    const [openm, setOpenm] = React.useState(false);
    const handleOpenM = () => setOpenm(true);
    const handleCloseM = () => setOpenm(false);

    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    };

      const Editgrid = styled(Grid)({
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '90%',
        marginTop: '1%',
        
      });
      const Typography1 = styled(Typography)({
        fontFamily: 'kanit',
      });
    
      const TextField1 = styled(TextField)({
        width: '70%',
        "& .MuiInputBase-root": {
            backgroundColor: '#fff'
        }
      });
      const Shapegrid = styled(Grid)({
        border: '1px solid #314365', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
        backgroundColor: '#fff'
      });
      const Formgrid = styled(Grid)({
        justifyContent: 'center', 
        border: '1px solid #314365', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
        backgroundColor: '#fff'
      });
      const Plotoflandbutton = styled(Button)({
        marginTop: '2%',
        marginBottom: '2%',
        fontFamily: 'kanit',
        fontWeight: 'bold',
        border: '1px solid #FD7060',
        borderRadius: '8px', 
        backgroundColor: '#FD7060', 
        color: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#fff',
        color: '#FD7060',
        transform: 'scale(1.02)'
        },
      });
      const Pagebutton = styled(Button)({
        fontFamily: 'kanit',
        width: '120px',
        fontWeight: 'bold',
        border: '1px solid #2F4266',
        borderRadius: '8px', 
        backgroundColor: '#fff', 
        color: '#2F4266',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
        backgroundColor: '#2F4266',
        color: '#fff',
        transform: 'scale(1.02)'
        },
      });

  return (
    <div>
        <Box sx= {{height: '100vh', minWidth: '1200px'}}>
           <Grid container sx= {{justifyContent: 'space-evenly', my: '0.5%'}}>
                <Formgrid item xs={4.8} container>
                    <Grid container sx= {{justifyContent: 'center'}}>
                        <Grid sx= {{px: '8%', py: '0.5%', backgroundColor: '#5E52E5', color: '#fff', borderRadius: '6px', my: '2%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <Typography className= {styles.kanit1} fontWeight= "bold">
                                แปลงนำเข้า
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx= {{justifyContent: 'space-evenly', width: '400px', alignItems: 'center'}}>
                        <Grid>
                            <Pagebutton variant='contained'
                            startIcon={<AiFillCaretLeft/>}
                            >
                            ก่อนหน้า
                            </Pagebutton>
                        </Grid>
                        <Box>1</Box>
                        <Box>/</Box>
                        <Box>2</Box>
                        <Grid>
                            <Pagebutton variant='contained' 
                            endIcon={<AiFillCaretRight/>}
                            >
                            ถัดไป 
                            </Pagebutton>
                        </Grid>
                    </Grid>
                    <Grid container sx= {{border: '2px solid #8C82F7', width: '550px', my: '2%', justifyContent: 'flex-end', borderRadius: '6px'}}>
                      <Grid sx= {{width: '500px', mt: '2%'}}>
                        <Typography1 variant='text' color= "gray">
                        สำนักงานที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        สำนักงานที่ดินจังหวัดกาญจนบุรี 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        โฉนดที่ดินเลขที่: 
                        </Typography1>
                        <Typography1 variant='text'>
                        2709 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        หน้าสำรวจ:
                        </Typography1>
                        <Typography1 variant='text'>
                        2318 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        อำเภอ: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ด่านมะขามเตี้ย 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ตำบล: 
                        </Typography1>
                        <Typography1 variant='text'>
                        กลอนโด 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระวาง:  
                        </Typography1>
                        <Typography1 variant='text'>
                        4836 I 4636-03 (2000) 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เลขที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        29 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เนื้อที่ (ไร่-งาน-ตร.ว.): 
                        </Typography1>
                        <Typography1 variant='text'>
                        1-0-33 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ชื่อหน่วยที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ถนนสายบ้านดอนสว่าง-บ้านหนองแก  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{ width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ประเภทรูปแปลง: รูปแปลงที่ดินสี่เหลี่ยม 
                        </Typography1>
                        <Typography1 variant='text'>
                        รูปแปลงที่ดินสี่เหลี่ยม  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกมาตรฐาน (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        40
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '100px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระยะที่:  
                        </Typography1>
                        <Typography1 variant='text'>
                        2 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกแปลง (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        56 
                        </Typography1>
                      </Grid>
                      
                      <Grid container sx= {{justifyContent: 'center'}}>
                        <Plotoflandbutton variant='contained' startIcon= {<SiOpenstreetmap/>} onClick={handleOpenM}>
                        ไปที่รูปแปลง
                        </Plotoflandbutton>
                      </Grid>
                    </Grid>
                    <Grid sx= {{px: '8%', py: '0.5%', backgroundColor: '#279E23', color: '#fff', borderRadius: '6px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <Typography className= {styles.kanit1} fontWeight= "bold">
                              แปลงเทียบเคียง
                            </Typography>
                    </Grid>
                    <Grid sx ={{overflowY: 'scroll', height: '300px', my: '2%'}}>
                    <Grid container sx= {{border: '2px solid #279E23', width: '550px', justifyContent: 'flex-end', borderRadius: '6px'}}>
                      <Grid sx= {{width: '500px', mt: '2%'}}>
                        <Typography1 variant='text' color= "gray">
                        สำนักงานที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        สำนักงานที่ดินจังหวัดกาญจนบุรี 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        โฉนดที่ดินเลขที่: 
                        </Typography1>
                        <Typography1 variant='text'>
                        2709 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        หน้าสำรวจ:
                        </Typography1>
                        <Typography1 variant='text'>
                        2318 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        อำเภอ: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ด่านมะขามเตี้ย 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ตำบล: 
                        </Typography1>
                        <Typography1 variant='text'>
                        กลอนโด 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระวาง:  
                        </Typography1>
                        <Typography1 variant='text'>
                        4836 I 4636-03 (2000) 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เลขที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        29 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เนื้อที่ (ไร่-งาน-ตร.ว.): 
                        </Typography1>
                        <Typography1 variant='text'>
                        1-0-33 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ชื่อหน่วยที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ถนนสายบ้านดอนสว่าง-บ้านหนองแก  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{ width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ประเภทรูปแปลง: รูปแปลงที่ดินสี่เหลี่ยม 
                        </Typography1>
                        <Typography1 variant='text'>
                        รูปแปลงที่ดินสี่เหลี่ยม  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกมาตรฐาน (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        40
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '100px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระยะที่:  
                        </Typography1>
                        <Typography1 variant='text'>
                        2 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกแปลง (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        56 
                        </Typography1>
                      </Grid>
                      
                      <Grid container sx= {{justifyContent: 'space-evenly', alignItems: 'center', my: '1.5%'}}>
                        <Grid sx= {{display: 'flex', width: '220px'}}>
                          <Checkbox size= "small" color= "success"/>
                          <Grid sx= {{px: '8%', py: '0.5%', backgroundColor: '#1EAC1B', color: '#fff', borderRadius: '6px', my: '2%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <Typography className= {styles.kanit1} fontWeight= "bold">
                            เลือกแปลงเทียบเคียง
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid>
                        <Plotoflandbutton variant='contained' startIcon= {<SiOpenstreetmap/>} onClick={handleOpenM}>
                        ไปที่รูปแปลง
                        </Plotoflandbutton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container sx= {{border: '2px solid #279E23', width: '550px', justifyContent: 'flex-end', borderRadius: '6px', mt: '2%'}}>
                      <Grid sx= {{width: '500px', mt: '2%'}}>
                        <Typography1 variant='text' color= "gray">
                        สำนักงานที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        สำนักงานที่ดินจังหวัดกาญจนบุรี 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        โฉนดที่ดินเลขที่: 
                        </Typography1>
                        <Typography1 variant='text'>
                        2709 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        หน้าสำรวจ:
                        </Typography1>
                        <Typography1 variant='text'>
                        2318 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        อำเภอ: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ด่านมะขามเตี้ย 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ตำบล: 
                        </Typography1>
                        <Typography1 variant='text'>
                        กลอนโด 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '300px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระวาง:  
                        </Typography1>
                        <Typography1 variant='text'>
                        4836 I 4636-03 (2000) 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เลขที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        29 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        เนื้อที่ (ไร่-งาน-ตร.ว.): 
                        </Typography1>
                        <Typography1 variant='text'>
                        1-0-33 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ชื่อหน่วยที่ดิน: 
                        </Typography1>
                        <Typography1 variant='text'>
                        ถนนสายบ้านดอนสว่าง-บ้านหนองแก  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{ width: '500px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ประเภทรูปแปลง: รูปแปลงที่ดินสี่เหลี่ยม 
                        </Typography1>
                        <Typography1 variant='text'>
                        รูปแปลงที่ดินสี่เหลี่ยม  
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกมาตรฐาน (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        40
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '100px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ระยะที่:  
                        </Typography1>
                        <Typography1 variant='text'>
                        2 
                        </Typography1>
                      </Grid>
                      <Grid sx= {{width: '200px', mt: '0.5%'}}>
                        <Typography1 variant='text' color= "gray">
                        ความลึกแปลง (เมตร):  
                        </Typography1>
                        <Typography1 variant='text'>
                        56 
                        </Typography1>
                      </Grid>
                      
                      <Grid container sx= {{justifyContent: 'space-evenly', alignItems: 'center', my: '1.5%'}}>
                        <Grid sx= {{display: 'flex', width: '220px'}}>
                          <Checkbox size= "small" color= "success"/>
                          <Grid sx= {{px: '8%', py: '0.5%', backgroundColor: '#1EAC1B', color: '#fff', borderRadius: '6px', my: '2%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <Typography className= {styles.kanit1} fontWeight= "bold">
                            เลือกแปลงเทียบเคียง
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid>
                        <Plotoflandbutton variant='contained' startIcon= {<SiOpenstreetmap/>} onClick={handleOpenM}>
                        ไปที่รูปแปลง
                        </Plotoflandbutton>
                        </Grid>
                      </Grid>
                    </Grid>
                    </Grid>
                    <Grid container sx= {{justifyContent: 'flex-end', width: '550px', my: '2%'}}>
                      <Button variant='contained'className= {styles.kanit1} fontWeight= "bold" startIcon= {<GiSave/>} 
                      sx= {{borderRadius: '8px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '140px'}}
                      disabled
                      >
                        กดบันทึก
                      </Button>
                    </Grid>
                </Formgrid>
                <Shapegrid item xs={6.9} container>
                    
                </Shapegrid>

            </Grid>
        </Box>


        <Modal
        open={openm}
        onClose={handleCloseM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CompareError onClose={handleCloseM}/>
        </Box>
      </Modal>






    </div>
  )
}
