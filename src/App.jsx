import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctors from "./pages/Doctors/Doctors";
import Appointment from "./pages/appointments/Appointment";
import Contact from "./pages/contact/Contact";
import About from "./components/aboutComps/About";
import Aboutt from "./pages/About/Aboutt";
import Notfoundpage from "./components/NotFound/Notfoundpage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<Notfoundpage />} />
        <Route path="/aboutt" element={<Aboutt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
