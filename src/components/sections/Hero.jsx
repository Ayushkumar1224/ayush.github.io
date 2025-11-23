import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Phone, FileText, Menu } from "lucide-react";
import { personal, PROFILE_IMAGE } from "../../data/personal";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // Mobile toggle
  const [hover, setHover] = useState(false); // Desktop hover

  const navItems = [
    { id: 1, label: "Home", icon: <Home size={22} />, href: "/home" },
    { id: 2, label: "About", icon: <User size={22} />, href: "/about" },
    {
      id: 3,
      label: "Projects",
      icon: <FolderGit2 size={22} />,
      href: "/projects",
    },
    { id: 4, label: "Contact", icon: <Phone size={22} />, href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-5 left-5 z-[999] p-2 bg-blue-600 rounded-lg text-white md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu size={26} />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`
          fixed top-0 left-0 h-full bg-[#0a0f1f] border-r border-blue-700/40
          flex flex-col items-center py-8 z-[998]
          transform transition-transform duration-300
          ${open ? "translate-x-0 w-64" : "-translate-x-20 w-20 md:w-20"}
          ${hover ? "md:w-64" : "md:w-20"}
        `}
      >
        {/* Profile Image */}
        <img
          src={PROFILE_IMAGE}
          alt={personal.name}
          className="w-14 h-14 rounded-full border border-blue-500 object-cover shadow-lg mb-10"
        />

        {/* Navigation */}
        <nav className="flex flex-col gap-6 w-full px-4">
          {navItems.map((nav) => (
            <motion.div key={nav.id} whileHover={{ scale: 1.05 }}>
              <Link
                to={nav.href}
                className="flex items-center gap-4 text-blue-300 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                <span>{nav.icon}</span>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                    hover || open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {nav.label}
                </span>
              </Link>
            </motion.div>
          ))}

          {/* Resume */}
          <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
            <a
              href="public/IT_Support Resume.pdf"
              target="_blank"
              className="flex items-center gap-4 text-blue-400 hover:text-white transition"
            >
              <FileText size={22} />
              <span
                className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                  hover || open ? "opacity-100" : "opacity-0"
                }`}
              >
                Resume
              </span>
            </a>
          </motion.div>
        </nav>
      </motion.aside>
    </>
  );
}
