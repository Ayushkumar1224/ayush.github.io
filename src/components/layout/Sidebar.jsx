import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Phone, FileText, Menu } from "lucide-react";
import { PROFILE_IMAGE } from "../../data/personal";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // mobile toggle

  const menuItems = [
    { to: "home", label: "Home", icon: Home },
    { to: "about", label: "About", icon: User },
    { to: "projects", label: "Projects", icon: FolderGit2 },
    { to: "contact", label: "Contact", icon: Phone },
    { to: "resume", label: "Resume", icon: FileText, url: "/resume.pdf" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-[9999] bg-gray-800 p-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <Menu size={22} className="text-white" />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          fixed top-0 left-0 h-full bg-[#0f172a] text-white z-[9998]
          border-r border-gray-700 shadow-lg
          flex flex-col items-center py-6
          transition-all duration-300 ease-in-out
          ${open ? "w-64" : "w-20 md:w-20 md:hover:w-64"}
        `}
      >
        {/* Profile Image */}
        <motion.img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-14 h-14 rounded-full border border-gray-500 object-cover mt-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 w-full px-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return item.url ? (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-xl transition"
              >
                <Icon size={22} />
                <span className="hidden md:inline-block text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={400}
                className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-xl transition cursor-pointer"
              >
                <Icon size={22} />
                <span className="hidden md:inline-block text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}
