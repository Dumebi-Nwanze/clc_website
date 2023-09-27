import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <nav className="w-full p-8 flex justify-between items-center shadow-lg top-0 bg-white z-50 fixed">
      <div>
        <h1
          onClick={() => scrollTo("hero")}
          className="font-extrabold text-primary text-lg md:text-2xl cursor-pointer"
        >
          Career Launch Consultancy
        </h1>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="hidden lg:flex-1 lg:flex justify-center space-x-10">
        {navLinks.map((item, index) => (
          <motion.p
            key={index}
            onClick={() => scrollTo(item.scrollTo)}
            className="hover:text-secondary cursor-pointer"
            variants={itemVariants}
          >
            {item.navTitle}
          </motion.p>
        ))}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="lg:hidden absolute top-full left-0 w-full bg-secondary text-white text-center py-2"
          >
            {navLinks.map((item, index) => (
              <motion.p
                key={index}
                onClick={() => scrollTo(item.scrollTo)}
                className="hover:text-secondary cursor-pointer my-4"
                variants={itemVariants}
              >
                {item.navTitle}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
