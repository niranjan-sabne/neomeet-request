import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  FormHelperText,
  OutlinedInput,
  TextField,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import Reusableimage from "../Reuseable/Reusableimage";
import "./LoginPage.css";
const mails = [
  { value: "neosoftmail.com", label: "neosoftmail.com" },
  { value: "neosofttech.com", label: "neosofttech.com" },
  { value: "wwindia.com", label: "wwindia.com" },
];
const Loginpage: React.FC = () => {
  const [email, setemail] = useState("neosoftmail.com");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };
  return (
    <div className="LoginPageMainDiv">
      <Grid container>
        <Grid item lg={7.5}>
          <Reusableimage />
        </Grid>
        <Grid item lg={4.5}>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off" 
            className="titlecss"
          >
            <FormControl sx={{ m: 1, width: "57ch" }} variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                Email
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
                      <MenuItem key={option.value} value={option.value} >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Loginpage;
