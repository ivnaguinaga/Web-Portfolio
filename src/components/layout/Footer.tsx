import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2A2A2A] dark:bg-[#0A0A0A] border-t-2 border-[#3A3A3A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-[#F5F1E8] flex items-center gap-2 mb-4">
              <span className="w-10 h-10 border-2 border-[#D97757] clip-corner flex items-center justify-center">
                IV
              </span>
            </div>
            <p className="text-sm text-[#A8A8A8] leading-relaxed">
              {personalInfo.title} - {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F1E8] uppercase tracking-wider mb-4">
              {t('nav.about')}
            </h3>
            <div className="space-y-2">
              {['experience', 'education', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block text-sm text-[#A8A8A8] hover:text-[#D97757] dark:hover:text-[#E8895C] transition-colors"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F1E8] uppercase tracking-wider mb-4">
              {t('about.contact_info')}
            </h3>
            <div className="space-y-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#A8A8A8] hover:text-[#00CFC1] dark:hover:text-[#00F5E4] transition-colors group"
              >
                <span className="w-8 h-8 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner-sm flex items-center justify-center group-hover:bg-[#00CFC1] dark:group-hover:bg-[#00F5E4] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#00CFC1] dark:text-[#00F5E4] group-hover:text-white" strokeWidth={2} />
                </span>
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-[#A8A8A8] hover:text-[#D97757] dark:hover:text-[#E8895C] transition-colors group"
              >
                <span className="w-8 h-8 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner-sm flex items-center justify-center group-hover:bg-[#D97757] dark:group-hover:bg-[#E8895C] transition-colors">
                  <Mail className="w-4 h-4 text-[#D97757] dark:text-[#E8895C] group-hover:text-white" strokeWidth={2} />
                </span>
                Email
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-sm text-[#A8A8A8] hover:text-[#00CFC1] dark:hover:text-[#00F5E4] transition-colors group"
              >
                <span className="w-8 h-8 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner-sm flex items-center justify-center group-hover:bg-[#00CFC1] dark:group-hover:bg-[#00F5E4] transition-colors">
                  <Phone className="w-4 h-4 text-[#00CFC1] dark:text-[#00F5E4] group-hover:text-white" strokeWidth={2} />
                </span>
                Phone
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#A8A8A8]">
            © {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
