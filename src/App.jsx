import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Locations from "./pages/Locations";
import Task from "./pages/Task";
import BranchReview from "./pages/Task/BranchReview";
import { TabukArea } from "./pages/Data";
import BranchesList from "./pages/Task/BranchesList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" name='Home' element={<HomePage />} />
        <Route exact path="/locations" name='locations page' element={<Locations />} />
        <Route exact path="/task" name='Task page' element={<Task />} />
        <Route exact path="/branches/*" name='Task page' element={<BranchesList />} />
        {
          TabukArea?.map((item, i) => (
            <Route exact path={`/branches/each-review/${item?.route}`} name='Branch Links' key={i}
              element={<BranchReview props={{ RLink: item?.url, branch: item?.name }} />} />
          ))
        }
        <Route exact path="*" name='Home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
