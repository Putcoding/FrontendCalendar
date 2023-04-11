import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Calendar from "./Pages/Calendar";
window.localStorage.setItem("login_key",0);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Calendar" element={<Calendar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
