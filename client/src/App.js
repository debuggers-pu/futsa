import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import FutsalDashboard from "./pages/FutsalDashboard";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import FutsalPage from "./pages/FutsalPage";
import { Toaster } from "react-hot-toast";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authModal = useSelector((state) => state.modal.authModal);
  return (
    <div className="App">
      {!isAuthenticated && authModal ? <Auth /> : ""}
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <SubNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/futsal-dashboard" element={<FutsalDashboard />} />
        <Route path="/futsal/:id" element={<FutsalPage />} />
      </Routes>
    </div>
  );
}

export default App;
