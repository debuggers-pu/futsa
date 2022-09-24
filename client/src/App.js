import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Auth from "./pages/Auth";
import {
  Routes,
  Route,
  useLocation,
  useMatch,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import FutsalPage from "./pages/FutsalPage";
import { Toaster } from "react-hot-toast";
import OwnerApp from "./OwnerApp/OwnerApp";
import { useEffect } from "react";
import { getUserDetail, getFutsalDetail } from "./axios";
import { setUserDetails } from "./redux/slices/authSlice";
import Userbookings from "./components/Userbookings";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authModal = useSelector((state) => state.modal.authModal);
  const userRole = useSelector((state) => state.auth.role);
  const profileModal = useSelector((state) => state.modal.profileModal);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.info.id && user.info.role === "customer") {
      const getUser = async () => {
        const res = await getUserDetail({ userId: user.info.id });
        dispatch(setUserDetails(res.data));
      };
      getUser();
    }
  }, [user.info.id]);

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
      {userRole === "customer" ? (
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
      {profileModal ? <Userbookings /> : ""}
    </div>
  );
}

export default App;
