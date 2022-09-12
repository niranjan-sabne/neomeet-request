import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/LoginPage/Loginpage';
import Registerpage from './Components/RegisterPage/Registerpage';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import theme from './Components/LoginPage/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/Register" element={<Registerpage />} />
            <Route path="/Forgetpassword" element={<ForgetPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
