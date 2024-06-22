import Navbar from "./components/Header/navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Router from "./Router";

export default function App() {

  const [showSidebar, setbar] = useState(false);

  return (

    <div className="bg-[#F0F0F0] dark:bg-neutral-950 min-h-screen min-w-full w-fit">
      <Navbar setbar={setbar} />

      <div className="flex">
        <Sidebar showSidebar={showSidebar} />
        <div className="px-[6rem] py-[4rem] max-md:px-6 max-md:py-4 ml-[6rem] max-md:m-0">
         <Router />
        </div>
      </div>
    </div>

  )
}

