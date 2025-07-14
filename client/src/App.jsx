import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {

  const {showLogin} = useContext(AppContext)

  return (
    <div className="px-4 sm:px-10 md:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50">
      <ToastContainer/>
      <NavBar />
      { showLogin && <Login /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
