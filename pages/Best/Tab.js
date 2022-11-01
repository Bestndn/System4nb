import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Grid } from '@mui/material/';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import Userr from '../system4/user'
import Cp from './Cp1'
import Ip from './Iprequire'
import Pr from './Preport'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Typographytabs = styled(Typography)({
    fontFamily: 'kanit',
    fontWeight: 'bold',
    color: '#fff',
  });
  const Typetabs = styled(Tab)({
    marginLeft: '4%',
    paddingLeft: '2%',
    paddingRight: '2%'
  });

  return (
    <Box sx={{ width: '100%', position: 'static'}}>
      <Grid container sx= {{height: '10px', backgroundColor: '#2F4266'}}></Grid>
        <Grid container sx= {{height: '90px', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image src="/Comu.png" alt="sdda" width={300} height={76} />
            <Typography variant='text' className={styles.kanit} 
            sx={{ color: '#2F4266', fontSize: 'x-large', fontWeight: 'bold'}}>
                  ระบบการประเมินราคาที่ดินที่ไม่ปรากฎในบัญชีราคาประเมินที่ดิน
            </Typography>
                <Userr/>
        </Grid>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        sx= {{backgroundColor: '#2F4266', position: 'static', width: '100%'}}
        >
          <Tab label={<Typographytabs variant='button'>หน้าหลัก</Typographytabs>} {...a11yProps(0)} sx= {{ml: '5%',px: '2%'}}/>
          <Typetabs label={<Typographytabs variant='button'>ค้นหา</Typographytabs>} {...a11yProps(1)} />
          <Typetabs label={<Typographytabs variant='button'>นำเข้า</Typographytabs>} {...a11yProps(2)} />
          <Typetabs label={<Typographytabs variant='button'>เทียบเคียง</Typographytabs>} {...a11yProps(3)} />
          <Typetabs label={<Typographytabs variant='button'>รายงาน</Typographytabs>} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ip/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Cp/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Pr/>
      </TabPanel>
    </Box>
  );
}



