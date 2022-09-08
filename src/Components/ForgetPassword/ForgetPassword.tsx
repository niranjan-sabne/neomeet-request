import {
  Grid,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Box,
  TextField,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import React, { useEffect } from 'react';
import Reusableimage from '../Reuseable/Reusableimage';
import './ForgetPassword.css';
import { useState } from 'react';
import {} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';

import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { fontSize, width } from '@mui/system';

const regForpassword = RegExp(/^[0-9]{6}/);
const regForEmail = RegExp(/^[A-Za-z]+\.[A-Za-z]+$/);
const mails = [
  { value: '@neosoftmail.com', label: '@neosoftmail.com' },
  { value: '@neosofttech.com', label: '@neosofttech.com' },
  { value: '@wwindia.com', label: '@wwindia.com' },
];

export default function ForgetPassword() {
  const UseRedirect = useNavigate();
  const [email, setemail] = useState('@neosoftmail.com');
  const [code, setCode] = useState('');
  const [user, setuser] = useState('');
  const [newcode, setnewcode] = useState('');
  const [confirmcode, setconfirmcode] = useState('');
  const [Counter, setCounter] = useState(60);
  const [OneSend, setOneSend] = useState(0);
  const [errors, seterrors] = useState({
    erremail: '',
    errpassword: '',
  });
  const [Timer, setTimer] = useState<boolean>(false);
  const [stepper, setstepper] = useState<number>(0);

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
  useEffect(() => {
    if (Counter > 0 && Timer) {
      const timer = setInterval(() => setCounter(Counter - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCounter(60);
      setTimer(false);
    }
  }, [Counter, Timer]);

  const startTimer = () => {
    if (user != '') {
      if (OneSend < 5) {
        setOneSend(OneSend + 1);
        setTimer(true);
      } else {
        toast.error('Attempts are over', {
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
      toast.error('Enter email first', {
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };
  const handleChangenewPass = (passCode: React.SetStateAction<string>) =>
    setnewcode(passCode);
  const handleChangeconfrimPass = (passCode: React.SetStateAction<string>) =>
    setconfirmcode(passCode);

  const handleChangePass = (passCode: React.SetStateAction<string>) =>
    setCode(passCode);

  const onSubmitButton = () => {
    if (user != '' && code != '') {
      setstepper(1);
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

  const onSubmitButton2 = () => {
    if (newcode != '' && confirmcode != '') {
      if (newcode === confirmcode) {
        toast.success('Passcode Changed Successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        UseRedirect('/');
      } else {
        toast.warning('Passcode Not Matched', {
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

  return (
    <div>
      <Grid container>
        <Grid item lg={7.5}>
          <Reusableimage />
        </Grid>
        <Grid item lg={4.5}>
          <Grid className="logo">
            <img src="neosoftlogo.png" alt="no-img" height="60px" />
          </Grid>
          <Paper className="forgetPass" sx={{ width: '400px' }} elevation={3}>
            FORGET PASSWORD
          </Paper>
          {stepper == 0 ? (
            <>
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
                        // onFocus={handler}
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
                          <MenuItem key={option.value} value={option.value}>
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
              <br />

              <Grid
                container
                className="sendOtp"
                // sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {Timer ? (
                  <Button variant="contained" disabled>
                    <AccessTimeTwoToneIcon fontSize="large" />
                    &nbsp; {Counter}
                  </Button>
                ) : (
                  <Button variant="contained" onClick={startTimer}>
                    {OneSend == 0 ? 'Send OTP' : 'Resend OTP'}
                  </Button>
                )}
              </Grid>

              <Grid>
                <FormControl sx={{ m: 4, width: '57ch' }} variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">
                    OTP<sup className="suptag">*</sup>
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
                SUBMIT
              </Button>
            </>
          ) : (
            <>
              <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                className="titlecss"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    marginLeft: '41px',
                  }}
                >
                  <Paper
                    component={'span'}
                    sx={{ Width: '360px', padding: '5px' }}
                  >
                    {user}
                    {email}
                  </Paper>
                </Box>
                <div>
                  <FormControl sx={{ m: 4, width: '40ch' }} variant="outlined">
                    <FormHelperText id="outlined-weight-helper-text">
                      New PassCode<sup className="suptag">*</sup>
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
                        value={newcode}
                        onChange={handleChangenewPass}
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
                  <FormControl sx={{ m: 4, width: '40ch' }} variant="outlined">
                    <FormHelperText id="outlined-weight-helper-text">
                      Confirm PassCode<sup className="suptag">*</sup>
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
                        value={confirmcode}
                        onChange={handleChangeconfrimPass}
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
                </div>
              </Box>
              <Button
                // className="submitbtn"
                variant="contained"
                color="primary"
                onClick={onSubmitButton2}
                sx={{ marginLeft: '70px' }}
              >
                SUBMIT
              </Button>
            </>
          )}
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
}
