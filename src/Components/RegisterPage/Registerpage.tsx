import {
  Grid,
  Box,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  Typography,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import React from "react";
import Reusableimage from "../Reuseable/Reusableimage";
import "./Registerpage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import ConfOtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const regForName = /^[a-zA-Z]{2,100}$/;
const regForpassword = RegExp(/^[0-9]{6}/);
const regForEmail = RegExp(/^[A-Za-z]+\.[A-Za-z]+$/);

const Registerpage: React.FC = () => {
  const [email, setemail] = useState("@neosoftmail.com");

  const [password, setpassword] = useState("");
  const [confpassword, setconfpassword] = useState("");
  const [code, setCode] = useState("");
  const [Confcode, setConfcode] = useState("");
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [errors, seterrors] = useState({
    errfirstname: "",
    errlastname: "",
    erremail: "",
    errpassword: "",
    pass: "",
  });

  const mails = [
    { value: "@neosoftmail.com", label: "@neosoftmail.com" },
    { value: "@neosofttech.com", label: "@neosofttech.com" },
    { value: "@wwindia.com", label: "@wwindia.com" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };

  const handler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstname":
        setuser({ ...user, firstname: value });
        break;
      case "lastname":
        setuser({ ...user, lastname: value });
        break;

      case "email":
        setuser({ ...user, email: value });
        break;

      default:
        break;
    }
  };

  const onChangeUser = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstname":
        let error1 = regForName.test(value) ? "" : "Enter valid Name";
        seterrors({ ...errors, errfirstname: error1 });
        setuser({ ...user, firstname: value });
        break;

      case "lastname":
        let error2 = regForName.test(value) ? "" : "Enter valid Name";
        seterrors({ ...errors, errlastname: error2 });
        setuser({ ...user, lastname: value });
        break;

      case "email":
        let error3 = regForEmail.test(value) ? "" : "Enter valid E-mail";
        seterrors({ ...errors, erremail: error3 });
        setuser({ ...user, email: value });
        break;
    }
  };

  const onSubmitButton = (event: any) => {
    event.preventDefault();
    if (
      user.firstname !== "" &&
      user.lastname !== "" &&
      user.email !== "" &&
      code != "" &&
      Confcode != ""
    ) {
      if (
        !errors.errfirstname &&
        !errors.errlastname &&
        !errors.erremail &&
        code === Confcode
      ) {
        toast.success("Form is valid and submitted successfully!✔", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warning("Invalid Data, try again", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Enter details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handlePasscode = (passCode: React.SetStateAction<string>) =>
    setCode(passCode);

  const handleConfPasscode = (passCode: React.SetStateAction<string>) =>
    setConfcode(passCode);

  return (
    <div>
      <Grid container>
        <Grid item lg={7.5}>
          <Reusableimage />
        </Grid>

        <Grid item lg={4.5}>
          <Grid className="registerlogo">
            <img src="neosoftlogo.png" alt="no-img" height="50px" />
          </Grid>

          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            className="titlecss"
          >
            <FormControl sx={{ m: 1, width: "57ch" }} variant="outlined">
              <FormHelperText
                id="outlined-weight-helper-text"
                sx={{ marginLeft: "1.8px" }}
              >
                First Name<sup className="suptag">*</sup>
              </FormHelperText>
              <Grid container>
                <Grid item lg={12}>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    sx={{ width: "100%" }}
                    inputProps={{
                      style: {
                        padding: 8,
                      },
                    }}
                    name="firstname"
                    // onFocus={handler}
                    onBlur={onChangeUser}
                  />
                </Grid>

                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.errfirstname}
                </span>
              </Grid>
            </FormControl>

            <FormControl sx={{ m: 1, width: "57ch" }} variant="outlined">
              <FormHelperText
                id="outlined-weight-helper-text"
                sx={{ marginLeft: "1.8px" }}
              >
                Last Name<sup className="suptag">*</sup>
              </FormHelperText>
              <Grid container>
                <Grid item lg={12}>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    sx={{ width: "100%" }}
                    inputProps={{
                      style: {
                        padding: 8,
                      },
                    }}
                    name="lastname"
                    // onFocus={handler}
                    onBlur={onChangeUser}
                  />
                </Grid>

                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.errlastname}
                </span>
              </Grid>
            </FormControl>
            <FormControl sx={{ m: 1, width: "57ch" }} variant="outlined">
              <FormHelperText
                id="outlined-weight-helper-text"
                sx={{ marginLeft: "1.8px" }}
              >
                Email<sup className="suptag">*</sup>
              </FormHelperText>
              <Grid container>
                <Grid item lg={8}>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    sx={{ width: "100%" }}
                    inputProps={{
                      style: {
                        padding: 8,
                      },
                    }}
                    name="email"
                    // onFocus={handler}
                    onBlur={onChangeUser}
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
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors.erremail}
                </span>
              </Grid>
            </FormControl>
            <Grid item lg={12}>
              <FormControl sx={{ width: "57ch" }} variant="outlined">
                <FormHelperText
                  id="outlined-weight-helper-text"
                  className="passcode-text"
                >
                  Create Passcode<sup className="suptag">*</sup>
                </FormHelperText>
                <Box
                  className="pass"
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      width: "5ch",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <OtpInput
                    className="otp"
                    value={code}
                    onChange={handlePasscode}
                    numInputs={6}
                    separator={<span style={{ width: "12px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: "1px solid #CFD3DB ",
                      borderRadius: "9px",
                      width: "36px",
                      height: "38px",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  />
                </Box>
                {/* <span style={{ color: "red" }}>{errors.errpassword}</span> */}
              </FormControl>
            </Grid>

            <Grid item lg={12}>
              <FormControl sx={{ width: "57ch" }} variant="outlined">
                <FormHelperText
                  id="outlined-weight-helper-text"
                  className="passcode-text"
                >
                  Confirm Passcode<sup className="suptag">*</sup>
                </FormHelperText>
                <Box
                  className="pass"
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      width: "5ch",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <OtpInput
                    className="otp"
                    value={Confcode}
                    onChange={handleConfPasscode}
                    numInputs={6}
                    separator={<span style={{ width: "12px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: "1px solid #CFD3DB ",
                      borderRadius: "9px",
                      width: "36px",
                      height: "38px",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  />
                </Box>
                {/* <span style={{ color: "red" }}>{errors.errpassword}</span> */}
              </FormControl>
            </Grid>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={(e) => onSubmitButton(e)}
              >
                Sign Up
              </Button>
            </Box>
            <Box className="register-noacc">
              <Typography component={"span"}>
                ALREADY HAVE AN ACCOUNT? <Link to="/">SIGN IN</Link>
              </Typography>
            </Box>
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

export default Registerpage;
