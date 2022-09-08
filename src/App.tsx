import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/LoginPage/Loginpage';
import Registerpage from './Components/RegisterPage/Registerpage';
import Forgetpage from './Components/ForgetPage/Forgetpage';
import theme from './Components/LoginPage/theme';
import { ThemeProvider } from '@mui/material/styles';
import Dashboard from './Components/DashBoard/Dashboard';
import MeetBooking from './Components/Booking/MeetBooking';

function App() {
   return (
      <>
         <ThemeProvider theme={theme}>
            <Router>
               <Routes>
                  <Route path="/" element={<Loginpage />} />
                  <Route path="/Register" element={<Registerpage />} />
                  <Route path="/Forgetpassword" element={<Forgetpage />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
               </Routes>
            </Router>
         </ThemeProvider>
      </>
   );
}

export default App;
