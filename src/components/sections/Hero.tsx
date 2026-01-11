import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen relative bg-[#F5F1E8] dark:bg-[#0A0A0A] overflow-hidden flex items-center pt-20"
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #2A2A2A 1px, transparent 1px),
            linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col min-h-[calc(100vh-5rem)]">
        <div className="flex-1 flex items-center justify-center py-9" >
          <div className="max-w-3xl mx-auto text-center w-full">
            {/* Content - Centered Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Geometric decorations */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-8 -left-8 w-24 h-24 border-4 border-[#D97757] dark:border-[#E8895C] clip-corner opacity-20 hidden lg:block"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className="absolute -top-8 -right-8 w-24 h-24 border-4 border-[#00CFC1] dark:border-[#00F5E4] clip-corner opacity-20 hidden lg:block"
              />

              {/* Location badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A1A1A] border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner mb-6"
              >
                <MapPin className="w-4 h-4 text-[#D97757] dark:text-[#E8895C]" />
                <span className="text-sm font-medium text-[#2A2A2A] dark:text-[#F5F1E8]">
                  {personalInfo.location}
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-[#6B6B6B] dark:text-[#A8A8A8] mb-3 font-medium"
              >
                {t('hero.greeting')}
              </motion.p>

              {/* Name with geometric underline */}
              <motion.div variants={itemVariants} className="relative mb-12 inline-block">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] leading-tight">
                  {personalInfo.name.split(' ')[0]}
                  <br />
                  <span className="text-[#D97757] dark:text-[#E8895C]">
                    {personalInfo.name.split(' ')[1]}
                  </span>
                </h1>
                {/* Angular accent - centered */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                  <span className="w-16 h-1 bg-[#D97757] dark:bg-[#E8895C] transform -skew-x-12" />
                  <span className="w-3 h-3 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm" />
                  <span className="w-16 h-1 bg-[#00CFC1] dark:bg-[#00F5E4] transform skew-x-12" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.p
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-[#2A2A2A] dark:text-[#F5F1E8] mb-6"
              >
                {t('hero.title')}
              </motion.p>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-[#6B6B6B] dark:text-[#A8A8A8] mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                {t('hero.description')}
              </motion.p>

              {/* Stats badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="px-6 py-3 bg-white dark:bg-[#1A1A1A] border-2 border-[#D97757] dark:border-[#E8895C] clip-corner">
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A8A8A8] mb-1">Experience</p>
                  <p className="text-xl font-bold text-[#D97757] dark:text-[#E8895C]">2+ years</p>
                </div>
                <div className="px-6 py-3 bg-white dark:bg-[#1A1A1A] border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner">
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A8A8A8] mb-1">Projects</p>
                  <p className="text-xl font-bold text-[#00CFC1] dark:text-[#00F5E4]">10+</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <Button onClick={() => scrollToSection('contact')} size="lg">
                  {t('hero.cta_contact')}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                >
                  {t('hero.cta_projects')}
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4"
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner flex items-center justify-center bg-white dark:bg-[#1A1A1A] hover:bg-[#D97757] hover:border-[#D97757] dark:hover:bg-[#E8895C] dark:hover:border-[#E8895C] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#D97757] dark:text-[#E8895C] group-hover:text-white" strokeWidth={2} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner flex items-center justify-center bg-white dark:bg-[#1A1A1A] hover:bg-[#00CFC1] hover:border-[#00CFC1] dark:hover:bg-[#00F5E4] dark:hover:border-[#00F5E4] transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-[#00CFC1] dark:text-[#00F5E4] group-hover:text-white" strokeWidth={2} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
            }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center gap-2 text-[#6B6B6B] dark:text-[#A8A8A8] hover:text-[#D97757] dark:hover:text-[#E8895C] transition-colors"
            >
              <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-current clip-corner flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1 h-3 bg-current clip-corner-sm"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
