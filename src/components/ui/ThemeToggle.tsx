import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const springTransition = { type: 'spring', stiffness: 200, damping: 20 } as const;

export function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner bg-white dark:bg-[#1A1A1A] hover:bg-[#FFF8F3] dark:hover:bg-[#2A2A2A] transition-colors overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0 }}
          transition={springTransition}
          className="absolute"
        >
          <Moon className="w-6 h-6 text-[#E8895C]" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1 }}
          transition={springTransition}
          className="absolute"
        >
          <Sun className="w-6 h-6 text-[#D97757]" strokeWidth={2} />
        </motion.div>
      </div>

      <span className="absolute top-0 right-0 w-3 h-3 bg-[#00CFC1] dark:bg-[#00F5E4] transition-all duration-300 group-hover:w-4 group-hover:h-4" />
    </button>
  );
}
