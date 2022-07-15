import BloodGroupIndex from "./Components/BloodGroup/BloodGroupIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Components/BloodGroup/Create";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BloodGroupIndex />} />  
          <Route path="/BloodGroup" element={<BloodGroupIndex />} />
          <Route path="/BloodGroup/Add" element={<Create />} />
          <Route path="/BloodGroup/edit/:id" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
