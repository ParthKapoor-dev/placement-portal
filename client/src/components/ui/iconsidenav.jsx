import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiHomeFill, RiLogoutCircleRLine } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { FaUser, FaRegFileAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdAssignment } from "react-icons/md";


export const SideNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <nav className="h-fit w-fit bg-white rounded px-6 py-4 flex flex-col items-center gap-10">
      {/* Temp logo from https://logoipsum.com/ */}
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <RiHomeFill />
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <IoBagSharp />
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <FaUser />
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <HiUsers />
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <MdAssignment />
      </NavItem>
      <NavItem selected={selected === 5} id={5} setSelected={setSelected}>
        <FaRegFileAlt />
      </NavItem>
      <NavItem selected={selected === 6} id={6} setSelected={setSelected}>
        <RiLogoutCircleRLine />
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl text-black transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      style={{ color : selected ? "red" : "black" , borderLeft : selected && 
        "3px solid red"
      }}
    >
      <span className="block relative z-10">{children}</span>
      {/* <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence> */}
    </motion.button>
  );
};
