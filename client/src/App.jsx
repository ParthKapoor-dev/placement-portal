import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Header/navbar";
import useUserContext from "./hooks/useUserContext";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignupPage from "./Pages/AuthPages/SignupPage";
import Sidebar from "./components/sidebar";
import ListingPage from "./Pages/ListingPage";
import { useState } from "react";

export default function App() {

  const { user } = useUserContext();
  const [showSidebar, setbar] = useState(false);

  return (

    <div className="bg-[#F0F0F0] dark:bg-neutral-950 min-h-screen min-w-full w-fit">
      <Navbar showSidebar={showSidebar} setbar={setbar} />

      <div className="flex">
        <Sidebar showSidebar={showSidebar} />
        <div className="px-[6rem] py-[4rem] max-md:px-6 max-md:py-4 ml-[6rem] max-md:m-0">
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

