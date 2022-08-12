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
import React, { useState } from 'react';
import Reusableimage from '../Reuseable/Reusableimage';
import './LoginPage.css';

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
   const [errors, seterrors] = useState({
      erremail: '',
      errpassword: '',
      pass: '',
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setemail(event.target.value);
   };

   const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      switch (name) {
         case 'email':
            let error1 = regForEmail.test(value) ? '' : 'Invalid Email';
            seterrors({ ...errors, erremail: error1 });
            break;

         case 'password':
            let error2 = regForpassword.test(value) ? '' : 'Invalid Password';
            seterrors({ ...errors, errpassword: error2, pass: value });
            break;
      }
   };

   const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split('-');
      const count = 1;

      let fieldIntIndex = parseInt(fieldIndex, 10);
      if (fieldIndex != '' && value != '') {
         const nextfield = document.querySelector(
            `input[name=password-${fieldIntIndex + 1}]`
         ) as HTMLElement | null;
         setpassword(password + value);

         if (nextfield !== null) {
            nextfield.focus();
         }
      } else if (value == '') {
         const nextfield = document.querySelector(
            `input[name=password-${fieldIntIndex - 1}]`
         ) as HTMLElement | null;
         setpassword(password + value);

         if (nextfield !== null) {
            nextfield.focus();
         }
      } else {
         const nextfield = document.querySelector(
            `input[name=password-${fieldIntIndex - 1}]`
         ) as HTMLElement | null;
         setpassword(password + value);

         if (nextfield !== null) {
            nextfield.focus();
         }
      }
   };
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
                              onChange={handler}
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
                        <span style={{ color: 'red' }}>{errors.erremail}</span>
                     </Grid>
                  </FormControl>
               </Box>
               <Grid className="Loginpin">
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
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-1"
                           onChange={handlePassword}
                        />
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-2"
                           onChange={handlePassword}
                        />
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-3"
                           onChange={handlePassword}
                        />
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-4"
                           onChange={handlePassword}
                        />
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-5"
                           onChange={handlePassword}
                        />
                        <TextField
                           id="outlined-basic"
                           variant="outlined"
                           required
                           inputProps={{ maxLength: 1 }}
                           sx={{
                              '& .MuiInputBase-root': {
                                 height: 42,
                                 borderRadius: 3,
                              },
                           }}
                           name="password-6"
                           onChange={handlePassword}
                        />
                     </Box>
                     <span style={{ color: 'red' }}>{errors.errpassword}</span>
                  </FormControl>
               </Grid>
               <Button
                  className="submitbtn"
                  variant="contained"
                  color="primary"
               >
                  Sign in
               </Button>
            </Grid>
         </Grid>
      </div>
   );
};

export default Loginpage;
