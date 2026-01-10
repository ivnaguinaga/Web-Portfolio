import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ca', label: 'Català', flag: '📍' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 w-14 h-14 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner bg-white dark:bg-[#1A1A1A] hover:bg-[#FFF8F3] dark:hover:bg-[#2A2A2A] transition-colors justify-center group"
      >
        <Globe className="w-5 h-5 text-[#D97757] dark:text-[#E8895C]" strokeWidth={2} />
        <span className="text-sm font-medium absolute -bottom-1 -right-1 bg-[#00CFC1] dark:bg-[#00F5E4] text-white w-5 h-5 flex items-center justify-center text-xs clip-corner-sm">
          {currentLang.flag}
        </span>

        {/* Diagonal scan line */}
        <span className="absolute top-0 left-0 w-full h-0.5 bg-[#00CFC1] dark:bg-[#00F5E4] origin-left transition-all duration-300 group-hover:rotate-45 group-hover:scale-x-150" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute right-0 mt-2 w-44 bg-white dark:bg-[#1A1A1A] border-2 border-[#D97757] dark:border-[#E8895C] clip-corner overflow-hidden z-50 origin-top"
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 border-b border-[#E8E4D9] dark:border-[#3A3A3A] last:border-b-0 ${currentLang.code === lang.code
                    ? 'bg-[#FFF8F3] dark:bg-[#2A2A2A] text-[#D97757] dark:text-[#E8895C]'
                    : 'hover:bg-[#FFF8F3] dark:hover:bg-[#2A2A2A] text-[#2A2A2A] dark:text-[#F5F1E8]'
                  }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.label}</span>
                {currentLang.code === lang.code && (
                  <span className="ml-auto w-2 h-2 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
