import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import styles from '../../../styles/Home.module.css';
import { Grid, Divider, Button } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';



export default function Searchcardnorsor () {
  
  return (
  <div> 
    <Box sx= {{maxWidth: '600px', bgcolor: '#E5E7F9 ', boxShadow: '4px 5px 18px rgba(0, 0, 0, 0.25)', borderRadius: '10px', mt: '5%', ml: '5%'}}>
        <Grid container sx= {{alignItems: 'center', justifyContent: 'flex-end',backgroundColor: '#EAB120 ', borderRadius: '10px 10px 0px 0px'}}>
                <Grid sx= {{width: '200px'}}>
                  <Grid container sx= {{justifyContent: 'center'}}>
                    <Typography variant= "h6" className= {styles.kanit} sx= {{color: '#fff', fontWeight: 'bold'}}>
                        ข้อมูลแปลงที่ดิน
                    </Typography>
                  </Grid>
                </Grid >
                <Grid sx= {{width: '200px', pr: '1.5%', py: '1.5%'}}>
                  <Grid container sx= {{justifyContent: 'flex-end'}}>
                    <IconButton sx= {{border: '2px solid #fff', width: '22px', height: '22px'}}>
                      <CloseRoundedIcon sx= {{color: '#fff', width: '17px', height: '17px'}}/>
                    </IconButton>
                  </Grid>
                </Grid >
              </Grid>
              

              <Grid container sx= {{justifyContent: 'center', pt: '1%'}}>
                <Grid container >
                  <Grid container sx= {{p: '1%', m: '0.5%', justifyContent: 'center'}}>
                    
                    <Grid container sx= {{my: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ประเภทบัญชี
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      ประกาศแบบเรีบงตามเลขที่ดิน
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      เล่ม
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      2
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                        หน้า
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                        2
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      น.ส. 3กเลขที่
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      -
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      เลขที่ดิน
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      218
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ระวาง
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      4836 IV 026 (5000)
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ตำบล
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                     -
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      อำเภอ
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      -
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      จังหวัด
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      กาญจนบุรี
                      </Typography>
                    </Grid>
                    </Grid>
                    
                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      เนื้อที่ (ไร่-งาน-ตร.ว.)
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      -
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ประเภทรูปแปลง
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      รูปแปลงที่ดินสี่เหลี่ยม
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      รหัสหน่วยที่ดิน
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      S07625
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ชื่อหน่วยที่ดิน
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      ซอยทาง
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ความลึกมาตรฐาน (เมตร)
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      40
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{mb: '1%'}}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ความลึกแปลง (เมตร)
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                      129
                      </Typography>
                    </Grid>
                    </Grid>

                    <Grid container sx= {{ mb: '1%' }}>
                      <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%'}}>
                        <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                        ราคาประเมิน (บาท / ตร.ว.)
                        </Typography>
                      </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Grid sx= {{bgcolor: 'rgba(55, 235, 49, 0.54)', px: '1.5%', borderRadius: '5px'}}>
                        <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                          300
                        </Typography>
                      </Grid>
                      </Grid>
                    </Grid>
                    
                    <Grid container sx= {{ mb: '4%' }}>
                    <Grid container sx= {{width: '45%', justifyContent: 'flex-end', mx: '2.5%' }}>
                      <Typography className= {styles.kanit} fontWeight= "bold" sx= {{color: '#314365'}}>
                      ราคาประเมินทั้งแปลง (บาท)
                      </Typography>
                    </Grid>
                    <Grid container sx= {{width: '45%', mx: '2.5%'}}>
                      <Grid sx= {{bgcolor: 'rgba(55, 235, 49, 0.54)', px: '1.5%', borderRadius: '5px'}}>
                        <Typography className= {styles.kanit} sx= {{color: 'black'}}>
                          20,700
                        </Typography>
                      </Grid>
                    </Grid>
                    </Grid>
                    
                  </Grid>
                </Grid>
                </Grid>
                
        </Box>
      
        
      
</div>
  );
}