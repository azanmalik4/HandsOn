import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary border-2 border-border hover:border-primary/50 transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-y-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
        initial={false}
        animate={{
          x: theme === "light" ? 2 : 28,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "light" ? (
          <Sun className="w-3.5 h-3.5 text-white" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-white" />
        )}
      </motion.div>
    </button>
  );
}