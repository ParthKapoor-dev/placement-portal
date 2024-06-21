import useUserContext from "@/hooks/useUserContext";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../DarkMode";
import { useToast } from "../ui/use-toast";

import ThaparIcon from "@/../public/thapar-icon.png"


export default function Navbar() {

  const { user , dispatch } = useUserContext();
  const { toast } = useToast();

  function handleLogout() {
    dispatch({ type: "Logout" });
  };

  function handleUserClick() {
    toast({
      title : "Hello " + user.name.split(" ")[0] + " ! How are you doing ?"
    })
  }

  return (
    <div className="bg-white shadow-md flex h-[10vh] items-center justify-between text-lg">
      
      <div className="z-10 w-[20vw]">
        <img src={ThaparIcon} className="h-[10vh] w-[10vh]" />
      </div>

      <div className="flex items-center w-[20vw] text-3xl text-red-600 font-semibold">
        <Link to="/" className="">
          Placement Portal
        </Link>

      </div>


      {user ? (
        <div className="flex gap-8 w-[15vw] ">
          <ThemeSwitch />

          <Link to="/" onClick={handleUserClick}>
            {user.name.split(' ')[0]}
          </Link>

          <div onClick={handleLogout} className="cursor-pointer">
            Logout
          </div>
        </div>
      ) : (
          <div className="flex gap-8 w-[15vw]">
            <ThemeSwitch />

            <Link to="/auth/login">
              Login
            </Link>

            <Link to="/auth/signup">
              Signup
            </Link>
        </div>
      )}
    </div>
  )
}