import {
  Grid,
  Box,
  TextField,
  Button,
  FormControl,
  Typography,
} from "@mui/material";
import React from "react";
import Reusableimage from "../Reuseable/Reusableimage";
import "./Registerpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const regForName = /^[a-zA-Z]{2,100}$/;
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const Registerpage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [confpassword, setconfpassword] = useState("");

  const [Error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const onChangeUser = (event: any) => {
    const { name, value } = event.target;
    let errors = Error;
    switch (name) {
      case "firstname":
        errors.firstname = regForName.test(value)
          ? ""
          : "Name should contain only letters";
        break;

      case "lastname":
        errors.lastname = regForName.test(value)
          ? ""
          : "Name should contain only letters ";
        break;

      case "email":
        errors.email = regForEmail.test(value) ? "" : "Enter Valid Email";
        break;
    }
    // setError({...Error, [name]: value });
    setData({ ...data, [name]: value });
    console.log(errors);
  };
  console.log(Error);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 7) {
        const nextfield = document.querySelector(
          `input[name=password-${fieldIntIndex + 1}]`
        ) as HTMLElement | null;
        setpassword(password + value);

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const validate = (Error: any) => {
    let valid = true;
    Object.values(Error).forEach(
      (value: any) => value.length > 0 && (valid = false)
    );
    return valid;
  };

  const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 7) {
        const nextfield = document.querySelector(
          `input[name=confirmpassword-${fieldIntIndex + 1}]`
        ) as HTMLElement | null;
        setpassword(password + value);

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const onSubmitButton = (event: any) => {
    event.preventDefault();
    // event.target.reset();
    if (validate(Error) && data.firstname && data.lastname && data.email) {
      alert("Form is valid and submitted successfully!");
    } else {
      alert("Invalid Form, try again !!");
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item lg={8}>
          <Reusableimage />
        </Grid>

        <Grid item lg={4} className="alignCenter">
          <Grid className="logo">
            <img src="neosoftlogo.png" alt="no-img" height="50px" />
          </Grid>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "43ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={Error?.firstname.length > 0 ? true : false}
              id="outlined-basic"
              label="First name"
              name="firstname"
              variant="outlined"
              onChange={onChangeUser}
              required
              helperText={Error?.firstname.length > 0 ? Error.firstname : ""}
            />

            <TextField
              error={Error?.lastname.length > 0 ? true : false}
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              name="lastname"
              onChange={onChangeUser}
              required
              helperText={Error?.lastname.length > 0 ? Error.lastname : ""}
            />
            <TextField
              error={Error?.email.length > 0 ? true : false}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={onChangeUser}
              required
              helperText={Error?.email.length > 0 ? Error.email : ""}
            />
            <Box />

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "5ch" },
                "& .MuiInputBase-root": {
                  height: 42,
                  borderRadius: 3,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <p>
                Passcode<sup className="suptag">*</sup>
              </p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-1"
                onChange={handlePassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-2"
                onChange={handlePassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-3"
                onChange={handlePassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-4"
                onChange={handlePassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-5"
                onChange={handlePassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="password-6"
                onChange={handlePassword}
                required
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "5ch" },
                "& .MuiInputBase-root": {
                  height: 42,
                  borderRadius: 3,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <p>
                ConfirmPasscode<sup className="suptag">*</sup>
              </p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-1"
                onChange={handleConfPassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-2"
                onChange={handleConfPassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-3"
                onChange={handleConfPassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-4"
                onChange={handleConfPassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-5"
                onChange={handleConfPassword}
                required
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                inputProps={{ maxlength: 1 }}
                name="confirmpassword-6"
                onChange={handleConfPassword}
                required
              />
            </Box>
          </Box>
          <Box className="boxCenter">
            <Button
              className="submitButton"
              variant="contained"
              onClick={(e) => onSubmitButton(e)}
            >
              Submit
            </Button>
          </Box>
          <br></br>
          <Box className="Navlogin">
            <span> ALREADY HAVE AN ACCOUNT? </span>
            <a href="/">CLICK HERE</a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registerpage;
