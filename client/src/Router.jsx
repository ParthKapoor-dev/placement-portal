import { Route, Routes , Navigate } from "react-router-dom";
import LoginPage from "./Pages/AuthPages/LoginPage";
import useUserContext from "./hooks/useUserContext";
import SignupPage from "./Pages/AuthPages/SignupPage";
import LandingPage from "./Pages/LandingPage";
import ListingPage from "./Pages/ListingPage";

export default function Router() {


  return (
    <Routes>

      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/company/:id"} element={<ListingPage />}/>

      <Route path={"/auth/login"} element={<LoginPage />} />
      <Route path={"/auth/signup"} element={<SignupPage />} />

    </Routes>
  )
}


function AuthRouter({ path, element }) {
  const { user } = useUserContext();
  return (
    <Route path={path} element={!user ? element : <Navigate to={"/"} />} />
  )
}

function AppRouter({ path, element }) {
  const { user } = useUserContext();
  return (
    <Route path={path} element={!user ? element : <Navigate to={"/auth/login"} />} />
  )
}