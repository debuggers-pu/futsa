import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import FutsalPage from "./pages/FutsalPage";
import { Toaster } from "react-hot-toast";
import OwnerApp from "./OwnerApp/OwnerApp";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authModal = useSelector((state) => state.modal.authModal);
  const mode = "owner";
  return (
    <div className="App">
      {!isAuthenticated && authModal ? <Auth /> : ""}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "font-bold text-sm",
        }}
      />
      {mode !== "owner" ? (
        <div>
          <Navbar />
          <SubNavbar />
        </div>
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/futsal/:id" element={<FutsalPage />} />
        <Route path="/owner/*" element={<OwnerApp />} />
      </Routes>
    </div>
  );
}

export default App;
