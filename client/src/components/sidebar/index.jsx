import { SideNav } from "../ui/iconsidenav";

export default function Sidebar({ showSidebar }) {

  return (
    <div className={`text-white flex justify-center items-center min-h-[90vh] z-10 fixed transition-all duration-500 max-md:${showSidebar ? "-translate-x-[100%]" : "-translate-x-0" }`}>
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