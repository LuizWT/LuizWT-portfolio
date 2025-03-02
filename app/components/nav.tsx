import { useState } from 'react';
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 sm:flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>
                  <span className="relative cursor-pointer group">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* GitHub Link - Now: Visible in both mobile and desktop */}
          <Link 
            to="https://github.com/LuizWT" 
            className={`cursor-pointer ${isMenuOpen ? 'hidden sm:block' : 'block'}`}
          >
            <FaGithub className="hover:text-purple-500 h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="pt-4 pb-3 space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    onClick={toggleMenu}
                    className="block px-2 py-1 text-neutral-400 hover:text-gray-900"
                  >
                    <span className="relative cursor-pointer group">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                    </span>
                  </Link>
                </li>
                
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;