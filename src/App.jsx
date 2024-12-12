import Navbar from "./components/header/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctors from "./pages/Doctors/Doctors";
import PatientProfile from "./pages/Patient/PatientProfile";
import DoctorProfile from "./pages/Doctors/DoctorProfile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patientProfile" element={<PatientProfile />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
