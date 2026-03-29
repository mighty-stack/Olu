# Olumide - Fullstack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Bootstrap. Features smooth animations, project showcase, and contact form.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Projects**: Dynamic project carousel
- **Contact Form**: Formik + Yup validation with EmailJS integration
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **PWA Ready**: Web app manifest for better mobile experience

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Bootstrap 5, Custom CSS
- **Animations**: Framer Motion, Lottie
- **Forms**: Formik, Yup
- **Icons**: Lucide React
- **Email**: EmailJS

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### EmailJS Setup
Update the EmailJS credentials in `src/Component/Contact.jsx`:
```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
  "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
  form.current,
  "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
)
```

### SEO Configuration
Before deployment, update the following in `index.html`:
- Replace `https://your-portfolio-domain.com` with your actual domain
- Update social media URLs in structured data
- Add your actual favicon files to `/public/`
- Update the manifest.json with proper icons

### Social Links
Update the following files with your actual profiles:
- `src/Component/Footer.jsx` - Social media links
- `index.html` - Structured data sameAs array

## 🚀 Deployment

### Vercel/Netlify (Recommended)
1. Connect your GitHub repository
2. Deploy automatically
3. Update domain in SEO meta tags

### Manual Build
```bash
npm run build
npm run preview
```

## 📈 SEO Checklist

- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ Web app manifest
- ✅ Lazy loading images
- ✅ Semantic HTML structure
- ✅ Alt text for images

## 🎨 Customization

### Colors
Update theme colors in `src/Styles/` CSS files and `index.html` meta tags.

### Content
- Update personal information in components
- Replace project data in `src/Data/Project.js`
- Update skills in `src/Data/Skills.js`
- Add your own images to `src/assets/Images/`

### Animations
Modify animation variants in component files for custom effects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Olumide**
