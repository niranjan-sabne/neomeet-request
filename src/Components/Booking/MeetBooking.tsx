import React, { useEffect } from 'react';
import {
   Modal,
   Box,
   Typography,
   TextField,
   Button,
   Grid,
   Autocomplete,
} from '@mui/material';
import { useState } from 'react';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import './MeetBooking.css';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { getAvailableRooms } from '../../Api/Api';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   height: 600,
   bgcolor: 'background.paper',
   border: '1px solid #000',
   boxShadow: 24,
   p: 4,
};

export default function MeetBooking({
   isBooking,
   setisBooking,
}: {
   isBooking: boolean;
   setisBooking: (b: boolean) => void;
}) {
   const handleClose = () => {
      setisBooking(false);
   };
   const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());
   const steps = ['Select Date and Time', 'Select meeting room'];
   const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
   const [endTime, setEndTime] = React.useState<Dayjs | null>(null);
   const [activeStep, setActiveStep] = React.useState(0);
   const [skipped, setSkipped] = React.useState(new Set<number>());
   const [selectedRoom, setselectedRoom] = useState<number>();
   const options = [
      'Conference Room',
      'Meeting Room',
      'Management Room',
      'Training Room',
   ];
   const [value, setValue] = React.useState<string | null>(options[0]);
   const [inputValue, setInputValue] = React.useState('');
   const isStepOptional = (step: number) => {
      return step === 1;
   };
   const isStepSkipped = (step: number) => {
      return skipped.has(step);
   };
   const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
         throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values());
         newSkipped.add(activeStep);
         return newSkipped;
      });
   };

   const handleNext = () => {
      try {
         let newSkipped = skipped;
         let startdate = dayjs(startDate).format();
         let starttime = dayjs(startTime).format().split('T')[1].split('+')[0];
         let endtime = dayjs(endTime).format().split('T')[1].split('+')[0];

         // api here after that if again to check the response available or not
         if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
         }
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
         setSkipped(newSkipped);
      } catch (err) {
         toast.error('All fields are compulsory', {
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

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const [availableRooms, setAvailableRooms] = useState<any>();
   useEffect(() => {
      if (activeStep == 1) {
         getAvailableRooms().then((res) => {
            if (res) {
               setAvailableRooms(res.data);
            }
         });
      }
   }, [activeStep]);

   return (
      <div>
         <Modal
            open={isBooking}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <div>
               <Box sx={style}>
                  <Stepper activeStep={activeStep}>
                     {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                           optional?: React.ReactNode;
                        } = {};
                        if (isStepOptional(index)) {
                           labelProps.optional = (
                              <Typography variant="caption">
                                 Required
                              </Typography>
                           );
                        }
                        if (isStepSkipped(index)) {
                           stepProps.completed = false;
                        }
                        return (
                           <Step key={label} {...stepProps}>
                              <StepLabel {...labelProps}>{label}</StepLabel>
                           </Step>
                        );
                     })}
                  </Stepper>
                  {activeStep == 0 ? (
                     <>
                        <Typography
                           id="modal-modal-title"
                           variant="h6"
                           component="h2"
                           sx={{
                              textAlign: 'center',
                              marginTop: '35px',
                              fontSize: '28px',
                              fontFamily: 'sans-serif',
                              color: '#B10704 ',
                              border: 'dotted 0.5px grey',
                           }}
                        >
                           Schedule Your Conference Room
                        </Typography>
                        <div
                           style={{
                              textAlign: 'center',
                              marginTop: '20px',
                           }}
                        >
                           <Typography variant="h6">Select Room:</Typography>
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}
                           >
                              <Autocomplete
                                 value={value}
                                 onChange={(
                                    event: any,
                                    newValue: string | null
                                 ) => {
                                    setValue(newValue);
                                 }}
                                 inputValue={inputValue}
                                 onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                 }}
                                 id="controllable-states-demo"
                                 options={options}
                                 sx={{
                                    width: '258px ',
                                 }}
                                 renderInput={(params) => (
                                    <TextField
                                       {...params}
                                       label="Select room"
                                    />
                                 )}
                              />
                           </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                           <Typography variant="h6">From Date :</Typography>
                           <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                 label="Date"
                                 renderInput={(params) => (
                                    <TextField {...params} />
                                 )}
                                 value={startDate}
                                 onChange={(input) => {
                                    setStartDate(input);
                                 }}
                              />
                           </LocalizationProvider>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                           <Typography variant="h6">From Time:</Typography>
                           <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                 label="Start Time"
                                 value={startTime}
                                 onChange={(input) => {
                                    setStartTime(input);
                                 }}
                                 renderInput={(params) => (
                                    <TextField {...params} />
                                 )}
                              />
                           </LocalizationProvider>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                           <Typography variant="h6">To Time:</Typography>
                           <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                 label="End Time"
                                 value={endTime}
                                 onChange={(input) => {
                                    setEndTime(input);
                                 }}
                                 renderInput={(params) => (
                                    <TextField {...params} />
                                 )}
                              />
                           </LocalizationProvider>
                        </div>
                     </>
                  ) : null}
                  {activeStep == 1 ? (
                     <>
                        <Typography
                           id="modal-modal-title"
                           variant="h6"
                           component="h2"
                           sx={{
                              textAlign: 'center',
                              marginTop: '10px',
                              marginBottom: '10px',
                              fontSize: '28px',
                              fontFamily: 'sans-serif',
                              color: '#B10704 ',
                              border: 'dotted 0.5px grey',
                           }}
                        >
                           Available Conference Rooms
                        </Typography>
                        <Grid container>
                           <Grid item lg={6}>
                              <Typography variant="h6">
                                 <span
                                    style={{
                                       color: '#000000DE ',
                                       fontWeight: 'bold',
                                    }}
                                 >
                                    {' '}
                                    Date :
                                 </span>{' '}
                                 {availableRooms?.date}
                              </Typography>
                           </Grid>
                           <Grid item lg={6}>
                              <Typography variant="h6">
                                 <span
                                    style={{
                                       color: '#000000DE ',
                                       fontWeight: 'bold',
                                    }}
                                 >
                                    Time :
                                 </span>{' '}
                                 {''}
                                 {availableRooms?.startTime} -{' '}
                                 {availableRooms?.endTime}
                              </Typography>
                           </Grid>
                           <Grid item lg={12}>
                              <Grid container className="roombooking">
                                 {availableRooms?.availRooms?.map(
                                    (ele: any) => (
                                       <Grid
                                          item
                                          lg={2}
                                          md={2}
                                          onClick={() => {
                                             setselectedRoom(ele.roomNo);
                                          }}
                                       >
                                          <Box
                                             className={`meetbooking-rooms ${
                                                selectedRoom == ele.roomNo
                                                   ? 'selectedRoom'
                                                   : ''
                                             }`}
                                          >
                                             {ele.roomNo}
                                          </Box>
                                       </Grid>
                                    )
                                 )}
                              </Grid>
                           </Grid>
                        </Grid>
                     </>
                  ) : null}
                  <Grid container className="button-grid">
                     <Grid item lg={5}>
                        {activeStep == 0 ? (
                           <Button
                              variant="contained"
                              startIcon={<CancelRoundedIcon />}
                              onClick={handleClose}
                              sx={{ backgroundColor: '#f12b20' }}
                           >
                              Cancel
                           </Button>
                        ) : (
                           <Button
                              variant="contained"
                              startIcon={<ReplyAllRoundedIcon />}
                              onClick={handleBack}
                              sx={{ backgroundColor: '#f12b20' }}
                           >
                              Back
                           </Button>
                        )}
                     </Grid>
                     <Grid
                        item
                        lg={5.7}
                        sx={{ display: 'flex', justifyContent: 'end' }}
                     >
                        {activeStep == 0 ? (
                           <Button
                              onClick={handleNext}
                              variant="contained"
                              color="primary"
                              endIcon={<SendRoundedIcon />}
                           >
                              Next
                           </Button>
                        ) : (
                           <Button
                              variant="contained"
                              color="primary"
                              endIcon={<SendRoundedIcon />}
                           >
                              Book Room
                           </Button>
                        )}
                     </Grid>
                  </Grid>
               </Box>
            </div>
         </Modal>
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
