<div align="center">
  <img src="public/assets/img/logo.png" alt="Roberto Torres Portfolio" width="200"/>
  
  # 🚀 Roberto Torres - Portfolio
  
  ### Full Stack Developer | Software Engineer | Tech Enthusiast
  
  [![Astro](https://img.shields.io/badge/Astro-5.4-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
  
  [🌐 Live Demo](https://roberto-torres.dev) • [📧 Contact](mailto:robertotorrespren@outlook.es) • [💼 LinkedIn](https://linkedin.com/in/roberto-torres)
  
</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, responsive UI with smooth animations
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, and structured data
- 🌙 **Interactive** - TypeWriter effects, counters, and smooth scrolling
- 📊 **Analytics Ready** - Easy integration with Google Analytics

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)

### Backend & Tools
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

### Database & Cloud
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

---

## 📦 Project Structure

```
roberto-torres-portfolio/
├── public/
│   └── assets/
│       ├── img/           # Images and logos
│       └── files/         # Downloadable files (CV, etc.)
├── src/
│   ├── components/        # Astro components
│   │   ├── About.astro
│   │   ├── Career.astro
│   │   ├── Contact.astro
│   │   ├── Counter.astro
│   │   ├── Courses.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Intro.astro
│   │   └── Projects.astro
│   ├── layouts/
│   │   └── Layout.astro   # Main layout
│   ├── pages/
│   │   └── index.astro    # Home page
│   └── styles/
│       └── style.css      # Global styles
├── astro.config.mjs       # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/roberto-torres/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:4321
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 🎨 Customization

### Update Personal Information

Edit `src/components/About.astro`:
```astro
const info = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your.email@example.com',
  phone: '+34 XXX XXX XXX',
  location: 'Your City, Country',
  // ...
};
```

### Add Projects

Edit `src/components/Projects.astro`:
```astro
const projects = [
  {
    title: 'Project Name',
    category: 'Category',
    image: '/assets/img/projects/project.jpg',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    // ...
  },
];
```

### Update Skills

Edit `src/components/About.astro`:
```astro
const skills = [
  { 
    name: 'Skill Name', 
    level: 90, 
    icon: 'icon-class',
    color: '#hexcolor',
    category: 'frontend'
  },
];
```

### Change Colors

Edit `src/styles/style.css`:
```css
:root {
  --primary-color: #0078ff;
  --secondary-color: #00d4ff;
  --dark-color: #1a202c;
  /* ... */
}
```

---

## 🌐 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/roberto-torres/portfolio)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/roberto-torres/portfolio)

### Manual Deployment

```bash
# Build the project
npm run build

# The ./dist/ folder contains your static site
# Upload to your hosting provider
```

---

## 📊 Performance

<div align="center">

### Lighthouse Score

![Performance](https://img.shields.io/badge/Performance-98-brightgreen?style=for-the-badge)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=for-the-badge)
![Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=for-the-badge)

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### Roberto Torres

**Full Stack Developer at IBERIA**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/roberto-torres)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:robertotorrespren@outlook.es)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/roberto-torres)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://roberto-torres.dev)

</div>

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Font Awesome](https://fontawesome.com) - Icon library
- [Google Fonts](https://fonts.google.com) - Typography
- [Icons8](https://icons8.com) - Technology icons

---

## 📈 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/roberto-torres/portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/roberto-torres/portfolio?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/roberto-torres/portfolio?style=social)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ by [Roberto Torres](https://github.com/roberto-torres)

**[⬆ Back to Top](#-roberto-torres---portfolio)**

</div>
