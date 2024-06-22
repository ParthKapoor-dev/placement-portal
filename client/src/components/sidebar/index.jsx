import { cn } from "@/lib/utils";
import { SideNav } from "../ui/iconsidenav";

export default function Sidebar({ showSidebar }) {

  console.log(showSidebar)

  return (
    <div className={cn("text-white flex justify-center items-center min-h-[90vh] z-10 fixed transition-all duration-500" , !showSidebar ? "max-md:-translate-x-[100%]" : "max-md:translate-x-0")}>
      <SideNav links={links}  />
    </div>
  )
};

const links = {
  home: "/",
  bag: "/",
  user: "/",
  users: "/",
  assignment: "/",
  resume: "/",
  logout: "/",
}