import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctors from "./pages/Doctors/Doctors";
import PatientProfile from "./pages/Patient/PatientProfile";
import DoctorProfile from "./pages/Doctors/DoctorProfile";
import FAQ from "./pages/FAQs/FAQ";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import Appointment from "./pages/appointments/Appointment";
import Contact from "./pages/contact/Contact";
import About from "./components/aboutComps/About";
import Aboutt from "./pages/About/Aboutt";
import Notfoundpage from "./components/NotFound/Notfoundpage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />

        <Route path="/patientProfile" element={<PatientProfile />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/payment" element={<PaymentPage />} /
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutfooter" element={<About />} />
        <Route path="/notfound" element={<Notfoundpage />} />
        <Route path="/about" element={<Aboutt />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
