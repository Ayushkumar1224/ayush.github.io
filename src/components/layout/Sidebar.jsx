import {
  Home as HomeIcon,
  User,
  FolderGit2,
  Phone,
  FileText,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { personal, PROFILE_IMAGE } from "../../data/personal";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, label: "Home", icon: <HomeIcon size={22} />, href: "#home" },
    { id: 2, label: "About", icon: <User size={22} />, href: "#about" },
    {
      id: 3,
      label: "Projects",
      icon: <FolderGit2 size={22} />,
      href: "#projects",
    },
    { id: 4, label: "Contact", icon: <Phone size={22} />, href: "#contact" },
  ];

  return (
    <>
      <button
        className="fixed top-5 left-5 z-[999] p-2 bg-blue-600 rounded-lg text-white md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu size={26} />
      </button>

      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 h-full w-20 bg-[#0a0f1f] border-r border-blue-700/40 flex flex-col items-center py-8 z-[998]
        ${open ? "translate-x-0" : "-translate-x-24 md:translate-x-0"}
        transition-all duration-300`}
      >
        <img
          src={PROFILE_IMAGE}
          alt={personal.name}
          className="w-14 h-14 rounded-full border border-blue-500 object-cover shadow-lg"
        />

        <nav className="mt-10 flex flex-col gap-8">
          {navItems.map((nav) => (
            <motion.a
              key={nav.id}
              href={nav.href}
              className="group flex flex-col items-center gap-1 text-blue-300 hover:text-white transition"
              whileHover={{ scale: 1.15 }}
            >
              <span>{nav.icon}</span>
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {nav.label}
              </span>
            </motion.a>
          ))}

          <motion.a
            href="/IT_Support Resume.pdf"
            target="_blank"
            className="group flex flex-col items-center gap-1 text-blue-400 hover:text-white transition"
            whileHover={{ scale: 1.15 }}
          >
            <FileText size={22} />
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Resume
            </span>
          </motion.a>
        </nav>
      </motion.aside>
    </>
  );
}
