import HomePage from "./page/HomePage";
import { Route, Routes } from "react-router-dom";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import MainPage from "./page/MainPage";
import Calendar from "./components/calendar/Calendar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
