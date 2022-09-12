import {
   Box,
   FormControl,
   Grid,
   InputAdornment,
   FormHelperText,
   OutlinedInput,
   TextField,
   MenuItem,
   Typography,
   Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Reusableimage from '../Reuseable/Reusableimage';
import './LoginPage.css';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const regForpassword = RegExp(/^[0-9]{6}/);
const regForEmail = RegExp(/^[A-Za-z]+\.[A-Za-z]+$/);
const mails = [
   { value: '@neosoftmail.com', label: '@neosoftmail.com' },
   { value: '@neosofttech.com', label: '@neosofttech.com' },
   { value: '@wwindia.com', label: '@wwindia.com' },
];

const Loginpage: React.FC = () => {
   const [email, setemail] = useState('@neosoftmail.com');
   const [password, setpassword] = useState('');
   const [user, setuser] = useState('');
   const [code, setCode] = useState('');
   const [errors, seterrors] = useState({
      erremail: '',
      errpassword: '',
      pass: '',
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setemail(event.target.value);
   };

   const userNamehandler = (event: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      switch (name) {
         case 'email':
            let error1 = regForEmail.test(value) ? '' : 'Enter valid E-mail';
            seterrors({ ...errors, erremail: error1 });
            setuser(value);
            break;
      }
   };

   const onSubmitButton = (event: any) => {
      event.preventDefault();
      console.log(user, 'user', code, 'code');
      if (user !== '' && code !== '') {
         if (!errors.erremail) {
            toast.success('Form is valid and submitted successfully!✔', {
               position: 'top-right',
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
            });
         } else {
            toast.warning('Invalid Data, try again', {
               position: 'top-right',
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
            });
         }
      } else {
         toast.error('Enter details', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      }
   };

   const navigate = useNavigate();
   const handleChangePass = (passCode: React.SetStateAction<string>) =>
      setCode(passCode);

   return (
      <div className="LoginPageMainDiv">
         <Grid container>
            <Grid item lg={7.5}>
               <Reusableimage />
            </Grid>

            <Grid item lg={4.5}>
               <Grid className="logo">
                  <img src="neosoftlogo.png" alt="no-img" height="60px" />
               </Grid>
               <Box
                  component="form"
                  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                  noValidate
                  autoComplete="off"
                  className="titlecss"
               >
                  <FormControl sx={{ m: 1, width: '57ch' }} variant="outlined">
                     <FormHelperText
                        id="outlined-weight-helper-text"
                        sx={{ marginLeft: '1.8px' }}
                     >
                        Email<sup className="suptag">*</sup>
                     </FormHelperText>
                     <Grid container>
                        <Grid item lg={8}>
                           <OutlinedInput
                              id="outlined-adornment-weight"
                              aria-describedby="outlined-weight-helper-text"
                              sx={{ width: '100%' }}
                              inputProps={{
                                 style: {
                                    padding: 8,
                                 },
                              }}
                              name="email"
                              onBlur={userNamehandler}
                           />
                        </Grid>
                        <Grid item lg={4}>
                           <TextField
                              id="filled-select-currency"
                              select
                              value={email}
                              onChange={handleChange}
                              variant="filled"
                              className="DropDown"
                           >
                              {mails.map((option) => (
                                 <MenuItem
                                    key={option.value}
                                    value={option.value}
                                 >
                                    {option.label}
                                 </MenuItem>
                              ))}
                           </TextField>
                        </Grid>
                        <span style={{ color: 'red', fontSize: '12px' }}>
                           {errors.erremail}
                        </span>
                     </Grid>
                  </FormControl>
               </Box>
               <Grid>
                  <FormControl sx={{ m: 4, width: '57ch' }} variant="outlined">
                     <FormHelperText id="outlined-weight-helper-text">
                        Passcode<sup className="suptag">*</sup>
                     </FormHelperText>
                     <Box
                        component="form"
                        sx={{
                           '& > :not(style)': {
                              m: 1,
                              width: '5ch',
                           },
                        }}
                        noValidate
                        autoComplete="off"
                     >
                        <OtpInput
                           className="otp"
                           value={code}
                           onChange={handleChangePass}
                           numInputs={6}
                           separator={<span style={{ width: '12px' }}></span>}
                           isInputNum={true}
                           shouldAutoFocus={true}
                           inputStyle={{
                              border: '1px solid #CFD3DB ',
                              borderRadius: '9px',
                              width: '36px',
                              height: '38px',
                              fontSize: '16px',
                              fontWeight: '400',
                           }}
                        />
                     </Box>
                     <span style={{ color: 'red' }}>{errors.errpassword}</span>
                  </FormControl>
               </Grid>


          <Button
            className="submitbtn"
            variant="contained"
            color="primary"
            onClick={onSubmitButton}
          >
            Sign in
          </Button>
          <Box className="forgetPassLink">
            <a href="/Forgetpassword">FORGET PASSWORD?</a>
          </Box>

               <Box className="noacc">
                  <Typography component={'span'}>
                     DON'T HAVE AN ACCOUNT? <a href="/register">SIGN UP</a>
                  </Typography>
               </Box>
            </Grid>
         </Grid>

         <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
};

export default Loginpage;
