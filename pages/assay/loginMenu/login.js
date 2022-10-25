import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import styles from '../../../styles/Home.module.css';



const theme = createTheme();

export default function Loginn() {


const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const Signinbutton = styled(Button)({
    padding: '2.5%', 
    borderRadius: '6px', 
    backgroundColor: '#2F4266', 
    fontWeight: 'bold', 
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        backgroundColor: '#fff',
        color: '#2F4266',
        transform: 'scale(1.02)'
      },
  });

  const Signupbutton = styled(Button)({
    padding: '2.5%',
    borderRadius: '6px', 
    backgroundColor: '#FFCF40', 
    fontWeight: 'bold', 
    fontFamily: [
        'kanit',
      ].join(','),
      '&:hover': {
        backgroundColor: '#fff',
        color: '#FFCF40',
        transform: 'scale(1.02)'
      },
  });

  return (
<ThemeProvider theme={theme}>
  <Box sx= {{}}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid container
          item
          xs={false}
          sm={false}
          md={7}
          sx={{
            backgroundImage: 'url(/101.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            justifyContent: 'center'
          }}
        >
          <Grid container sx= {{ alignItems: 'center', width: '100%', height: '25%', my: '1.5%', mx: '2%'}}>
              <Grid>
              <Image src="/Comu.png" alt="Banner" width={`650px`}  height={'172px'} />
              </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
               
            }}
          >
            <Grid container justifyContent= 'center' sx= {{my: '3%'}}>
                    <Typography component="h1" variant="h4" fontWeight= "bold" className= {styles.kanit} >
                        บูรณาการทะเบียนทรัพย์สิน 
                    </Typography>
                <Grid container sx= {{justifyContent: 'center'}}>
                    <Typography component="h1" variant="h4" fontWeight= "bold" className= {styles.kanit} >
                        (กรมธนารักษ์)
                    </Typography>
                </Grid>
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '90%' }}>
                <Typography className= {styles.kanit} >
                    ชื่อผู้ใช้
                </Typography>
                    <TextField
                    margin="normal"
                    id="email"
                    label={<Typography className= {styles.kanit}>Username</Typography>}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    fullWidth
                    />
                <Typography className= {styles.kanit} sx= {{mt: '3%'}}>
                    รหัสผ่าน
                </Typography>
                <FormControl fullWidth variant="outlined" margin="normal" >
                      <InputLabel htmlFor="outlined-adornment-password" >
                        {<Typography className= {styles.kanit}>Password</Typography>} 
                      </InputLabel>
                      <OutlinedInput
                        autoComplete="current-password"
                        name="password"
                        label="Password"
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        fullWidth
                        endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                      </InputAdornment>
                      }
                      />
                </FormControl>
                </Box>
              <Grid container sx ={{justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
                <Grid item xs>
                    <FormControlLabel
                    control={<Checkbox value="remember" sx= {{'&.Mui-checked': {color: '#2F4266'}}} />}
                    label={<Typography variant='body3' className= {styles.kanit}>จำไว้ในระบบ</Typography>}
                    />
                </Grid>
                <Grid item>
                  <Link 
                  href="#" 
                  variant="body3" 
                  className= {styles.kanit} 
                  underline="none"
                  color="#424242"
                  sx= {{'&:hover': {textDecoration: 'underline #424242'} }}
                  >
                    ลืมรหัสผ่าน ?
                  </Link>
                </Grid>
              </Grid>

                        
              
              <Link 
              href={'../../assay/loginMenu/menu'} 
              sx= {{width: '90%', mt :'10%'}} 
              underline="none"
              >         
                <Signinbutton
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  เข้าสู่ระบบ
                </Signinbutton> 
              </Link>
              
              <Link 
              href={''} 
              sx= {{width: '90%', mt :'5%'}} 
              underline="none"
              > 
                <Signupbutton
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  ลงทะเบียน
                </Signupbutton>
              </Link>

          </Box>
        </Grid>
      </Grid>
  </Box>
</ThemeProvider>
  );
}