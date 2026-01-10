# Iván Aguinaga - Portfolio

A modern, professional web portfolio built with React, TypeScript, and Tailwind CSS, featuring a distinctive "Technical Precision" design aesthetic.

## Features

- 🎨 **Unique Design**: Angular geometry with warm terracotta and cyan accents
- 🌓 **Dark/Light Mode**: Smooth theme switching with system preference detection
- 🌐 **Multi-language**: Support for Spanish, English, and Catalan
- ⚡ **Fast Performance**: Built with Vite for optimal build times
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ✨ **Smooth Animations**: Purposeful animations using Framer Motion
- 📧 **Contact Form**: Integrated with EmailJS

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd webportfolio
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up EmailJS (optional, for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template with variables: \`{{from_name}}\`, \`{{from_email}}\`, \`{{message}}\`
   - Copy \`.env.example\` to \`.env\` and add your credentials

4. Start the development server
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

\`\`\`bash
npm run build
\`\`\`

Preview the production build:
\`\`\`bash
npm run preview
\`\`\`

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: \`npm i -g vercel\`
2. Run \`vercel\` in the project directory
3. Follow the prompts
4. Add environment variables in the Vercel dashboard

### Netlify

1. Drag and drop the \`dist\` folder after running \`npm run build\`
2. Or connect your GitHub repository for continuous deployment

## Project Structure

\`\`\`
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, About, Experience, etc.
│   └── ui/            # Reusable UI components
├── contexts/          # React contexts (Theme)
├── hooks/             # Custom React hooks
├── data/              # Portfolio data (experience, projects, skills)
├── config/            # Configuration (i18n)
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
\`\`\`

## Customization

### Update Personal Information

Edit the data files in \`src/data/\`:
- \`personal.ts\` - Name, contact info
- \`experience.ts\` - Work experience
- \`education.ts\` - Education history
- \`projects.ts\` - Portfolio projects
- \`skills.ts\` - Technical skills and languages

### Update Translations

Edit translation files in \`public/locales/{es,en,ca}/translation.json\`

### Change Colors

Update the color variables in \`src/index.css\`:
- \`--color-primary-light/dark\` - Main accent color
- \`--color-background-light/dark\` - Background colors
- \`--color-surface-light/dark\` - Card/surface colors

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Iván Aguinaga Velázquez
- Email: ivan7agui@gmail.com
- LinkedIn: [linkedin.com/in/ivanaguinagavelazquez](https://linkedin.com/in/ivanaguinagavelazquez)
- Location: Barcelona, España
