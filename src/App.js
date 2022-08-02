import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Dashboard/Home";
import MainHome from "./components/MainHome";
import Organize from "./components/Organize";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/org" element={<Organize />} />
        <Route exact path="/admin" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
