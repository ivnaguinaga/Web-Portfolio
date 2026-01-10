import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner bg-white dark:bg-[#1A1A1A] hover:bg-[#FFF8F3] dark:hover:bg-[#2A2A2A] transition-colors overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 180 : 0,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute"
        >
          <Moon className="w-6 h-6 text-[#E8895C]" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : -180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute"
        >
          <Sun className="w-6 h-6 text-[#D97757]" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Corner accent */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-[#00CFC1] dark:bg-[#00F5E4] transition-all duration-300 group-hover:w-4 group-hover:h-4" />
    </button>
  );
};
