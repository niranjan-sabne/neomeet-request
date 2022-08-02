import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./Components/LoginPage/Loginpage";
import Registerpage from "./Components/RegisterPage/Registerpage";
import Forgetpage from "./Components/ForgetPage/Forgetpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Register" element={<Registerpage />} />
          <Route path="/Forgetpassword" element={<Forgetpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
