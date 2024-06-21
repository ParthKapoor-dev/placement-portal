import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiHomeFill, RiLogoutCircleRLine } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";


export const SideNav = ({ links }) => {
  const [selected, setSelected] = useState(0);

  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <nav className="h-fit w-fit bg-white rounded px-6 py-4 flex flex-col items-center gap-10 shadow-md">
      {/* Temp logo from https://logoipsum.com/ */}
      <NavItem link={links.home} selected={selected === 0} id={0} setSelected={setSelected}>
        <RiHomeFill />
      </NavItem>
      <NavItem link={links.bag} selected={selected === 1} id={1} setSelected={setSelected}>
        <IoBagSharp />
      </NavItem>
      <NavItem link={links.user} selected={selected === 2} id={2} setSelected={setSelected}>
        <FaUser />
      </NavItem>
      <NavItem link={links.users} selected={selected === 3} id={3} setSelected={setSelected}>
        <HiUsers />
      </NavItem>
      <NavItem link={links.assignment} selected={selected === 4} id={4} setSelected={setSelected}>
        <MdAssignment />
      </NavItem>
      <NavItem link={links.resume} selected={selected === 5} id={5} setSelected={setSelected}>
        <FaRegFileAlt />
      </NavItem>
      <NavItem link={links.logout} selected={selected === 6} id={6} setSelected={setSelected}>
        <RiLogoutCircleRLine />
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected , link }) => {
  return (
    <motion.button
      className="p-3 text-xl text-black transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      style={{
        color: selected ? "red" : "black", borderLeft: selected &&
          "3px solid red"
      }}
    >
      <Link to={link} className="block relative z-10">{children}</Link>
    </motion.button>
  );
};
