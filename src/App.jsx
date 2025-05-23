import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Locations from "./pages/Locations";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" name='Home' element={<HomePage />} />
        <Route exact path="/locations" name='locations page' element={<Locations />} />
        <Route exact path="*" name='Home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
