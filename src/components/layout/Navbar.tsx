import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../../pages/ThemeToggle"; // ADD THIS
import logo from '../../../public/handsON.jpeg';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Information", path: "/information" },
  { name: "Product", path: "/product" }, // ADD THIS
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 group relative z-50">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <img 
                    src={logo} 
                    alt="HandsON Logo" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity -z-10" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  HandsOn
                </span>
                <span className="font-bold text-base md:text-lg gradient-text ml-1">
                  Communicator
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`absolute inset-0 bg-secondary rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity ${
                    location.pathname === link.path ? 'hidden' : ''
                  }`} />
                </Link>
              ))}
              
              {/* Theme Toggle - REPLACES Get Started Button */}
              <div className="ml-2 lg:ml-4 flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 rounded-xl text-foreground hover:bg-secondary/80 active:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="flex flex-col gap-1.5"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    className="w-6 h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-6 h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    className="w-6 h-0.5 bg-current rounded-full"
                  />
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card border-l border-border z-40 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <img 
                        src={logo} 
                        alt="HandsON Logo" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-base text-foreground block">HandsOn</span>
                      <span className="font-bold text-base gradient-text block -mt-1">Communicator</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-6 py-8 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                          location.pathname === link.path
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {location.pathname === link.path && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 border-t border-border space-y-4">
                  {/* Theme Toggle for Mobile */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                    <span className="text-sm font-medium text-foreground">Dark Mode</span>
                    <ThemeToggle />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-sm text-muted-foreground"
                  >
                    Breaking barriers in communication
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};