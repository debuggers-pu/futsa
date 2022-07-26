import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import FutsalDashboard from "./pages/FutsalDashboard";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import FutsalPage from "./pages/FutsalPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      <Navbar />
      <SubNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/auth"
            element={isAuthenticated ? <Homepage /> : <Auth />}
          />
          <Route
            path="/search"
            element={isAuthenticated ? <SearchPage /> : <Auth />}
          />
          <Route
            path="/futsal-dashboard"
            element={isAuthenticated ? <FutsalDashboard /> : <Auth />}
          />
          <Route
            path="/futsal/:id"
            element={!isAuthenticated ? <FutsalPage /> : <Auth />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
