import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/LoginPage/Loginpage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
