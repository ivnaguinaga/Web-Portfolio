import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSelector } from '../ui/LanguageSelector';

interface NavItem {
  key: string;
  href: string;
}

const navItems: NavItem[] = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

export function Header(): JSX.Element {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    function handleScroll(): void {
      setIsScrolled(window.scrollY > 50);

      for (const { key } of navItems) {
        const element = document.getElementById(key);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(key);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-sm border-b-2 border-[#E8E4D9] dark:border-[#3A3A3A]'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-bold text-[#D97757] dark:text-[#E8895C] flex items-center gap-2 group"
          >
            <span className="w-10 h-10 border-2 border-current clip-corner flex items-center justify-center group-hover:bg-current group-hover:text-white transition-colors">
              IV
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all relative group ${activeSection === item.key
                    ? 'text-[#D97757] dark:text-[#E8895C]'
                    : 'text-[#2A2A2A] dark:text-[#F5F1E8] hover:text-[#D97757] dark:hover:text-[#E8895C]'
                  }`}
              >
                {t(`nav.${item.key}`)}
                {activeSection === item.key && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97757] dark:bg-[#E8895C]" />
                )}
              </a>
            ))}
          </div>

          {/* Theme & Language Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-14 h-14 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner flex items-center justify-center bg-white dark:bg-[#1A1A1A] hover:bg-[#D97757] hover:border-[#D97757] dark:hover:bg-[#E8895C] dark:hover:border-[#E8895C] transition-colors group"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D97757] dark:text-[#E8895C] group-hover:text-white" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 text-[#D97757] dark:text-[#E8895C] group-hover:text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t-2 border-[#E8E4D9] dark:border-[#3A3A3A] overflow-hidden bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-sm"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium border-l-4 transition-colors ${activeSection === item.key
                        ? 'border-[#D97757] dark:border-[#E8895C] bg-[#FFF8F3] dark:bg-[#2A2A2A] text-[#D97757] dark:text-[#E8895C]'
                        : 'border-transparent text-[#2A2A2A] dark:text-[#F5F1E8] hover:border-[#D97757] dark:hover:border-[#E8895C] hover:bg-[#FFF8F3] dark:hover:bg-[#2A2A2A]'
                      }`}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
