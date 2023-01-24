// Import libraries
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Import components, files and functions
  // CSS       
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css"
  // Components
import Login from "./pages/Login"
import WaitingRoom from "./pages/WaitingRoom";
import Doctor from "./pages/Doctor";
import Admin from "./pages/Admin";
import People from "./pages/People";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reception" element={<WaitingRoom/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/people" element={<People/>}/>
      </Routes>      
      <Footer/>
    </Router>
  );
}

export default App;
