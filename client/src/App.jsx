import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Header/navbar";
import useUserContext from "./hooks/useUserContext";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignupPage from "./Pages/AuthPages/SignupPage";
import Sidebar from "./components/sidebar";
import ListingPage from "./Pages/ListingPage";

export default function App() {

  const { user } = useUserContext();

  return (

    <div className="bg-[#F0F0F0] min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="px-[6rem] py-[4rem]">
          <Routes>
            <Route path="/" element={user ? <LandingPage /> : <Navigate to="/auth/login" />} />
            <Route path="/company/:id" element={user ? <ListingPage /> : <Navigate to="/auth/login" />} />


            <Route path="/auth/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
            <Route path="/auth/signup" element={!user ? <SignupPage /> : <Navigate to={"/"} />} />


          </Routes>
        </div>
      </div>
    </div>

  )
}

