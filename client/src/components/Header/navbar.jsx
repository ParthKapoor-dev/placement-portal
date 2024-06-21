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
    <div className="bg-white shadow-md flex h-[8vh] items-center justify-between text-lg max-md:justify-normal max-md:gap-[3rem]">
      
      <div className="w-[20vw] max-md:w-fit">
        <img src={ThaparIcon} className="h-[10vh] w-[10vh] max-md:h-[8vh] max-md:w-[8vh]" />
      </div>

      <div className="flex items-center w-[20vw] max-md:w-fit text-3xl max-md:text-2xl text-red-600 font-semibold">
        <Link to="/" className="">
          Placement Portal
        </Link>

      </div>


      {user ? (
        <div className="flex gap-8 w-[15vw] max-md:hidden ">
          <ThemeSwitch />

          <Link to="/" onClick={handleUserClick}>
            {user.name.split(' ')[0]}
          </Link>

          <div onClick={handleLogout} className="cursor-pointer">
            Logout
          </div>
        </div>
      ) : (
          <div className="flex gap-8 w-[15vw] max-md:hidden">
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