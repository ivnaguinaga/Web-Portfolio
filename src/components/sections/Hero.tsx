import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../ui/Button';

export const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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

      {/* Diagonal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D97757] to-transparent transform -rotate-2 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="absolute bottom-1/3 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00CFC1] to-transparent transform rotate-1 origin-right"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - Diagonal Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Geometric decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-8 -left-8 w-24 h-24 border-4 border-[#D97757] dark:border-[#E8895C] clip-corner opacity-20"
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
            <motion.div variants={itemVariants} className="relative mb-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] leading-tight">
                {personalInfo.name.split(' ')[0]}
                <br />
                <span className="text-[#D97757] dark:text-[#E8895C]">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
              {/* Angular accent */}
              <div className="absolute -bottom-2 left-0 flex items-center gap-2">
                <span className="w-16 h-1 bg-[#D97757] dark:bg-[#E8895C] transform -skew-x-12" />
                <span className="w-3 h-3 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-[#2A2A2A] dark:text-[#F5F1E8] mb-6 mt-8"
            >
              {t('hero.title')}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#6B6B6B] dark:text-[#A8A8A8] mb-8 leading-relaxed max-w-xl"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
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
              className="flex gap-4"
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

          {/* Image Side - Angular Framed Photo */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main photo container with angular frame */}
            <div className="relative">
              {/* Background geometric shapes */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-8 bg-gradient-to-br from-[#D97757]/10 to-[#00CFC1]/10 dark:from-[#E8895C]/10 dark:to-[#00F5E4]/10 clip-corner"
              />

              {/* Technical corner brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#D97757] dark:border-[#E8895C]" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#00CFC1] dark:border-[#00F5E4]" />

              {/* Photo frame */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 border-4 border-[#2A2A2A] dark:border-[#F5F1E8] clip-corner overflow-hidden bg-white dark:bg-[#1A1A1A]">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />

                {/* Scan line effect */}
                <motion.div
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 5,
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00CFC1]/30 to-transparent h-24 pointer-events-none"
                />
              </div>

              {/* Corner accent squares */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 right-0 w-8 h-8 bg-[#D97757] dark:bg-[#E8895C] clip-corner-sm"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-0 left-0 w-6 h-6 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm"
              />
            </div>

            {/* Floating stats/badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute top-8 -left-10 lg:left-0 px-6 py-3 bg-white dark:bg-[#1A1A1A] border-2 border-[#D97757] dark:border-[#E8895C] clip-corner"
            >
              <p className="text-xs text-[#6B6B6B] dark:text-[#A8A8A8] mb-1">Experience</p>
              <p className="text-xl font-bold text-[#D97757] dark:text-[#E8895C]">2+ years</p>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
    </section>
  );
};
