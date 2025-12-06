# My Portfolio

A modern, responsive portfolio website showcasing my skills, experience, projects, and contact information. Built with a beautiful galaxy-themed design featuring dark/light mode toggle and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference storage
- **Smooth Animations**: Hover effects, transitions, and interactive elements throughout
- **Modern UI**: Neumorphic design with gradient effects and glowing accents
- **Project Showcase**: Direct links to live projects (Tourism Landing Page, E-commerce site)
- **Experience Timeline**: Educational background displayed in an attractive card layout
- **Social Links**: Quick access to GitHub and LinkedIn profiles
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **JavaScript**: Interactive features, theme toggle, and smooth scrolling
- **Bootstrap 5.3.3**: Responsive grid system and utilities
- **Bootstrap Icons**: Icon library for UI elements

## 📁 File Structure

```
MyPortfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── Images/
    ├── Pfp.jpg         # Profile photo
    ├── BSU.jpg         # Batangas State University image
    ├── AASMNHS.jpg     # Anselmo A. Sandoval MNHS image
    ├── SPNSH.jpg       # San Pascual NHS image
    ├── Tourist.png     # Tourism project thumbnail
    └── Hood.png        # E-commerce project thumbnail
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone or download this repository
   ```bash
   git clone https://github.com/motchie00/MyPortfolio.git
   cd MyPortfolio
   ```

2. Open `index.html` in your web browser
   - Simply double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📖 Sections

### Hero Section
- Profile photo and introduction
- Navigation buttons to different sections
- Responsive layout with photo and text side-by-side

### About
- Personal introduction
- Front-End Skills description
- Tech Stack (HTML, CSS, JavaScript, Bootstrap)
- Currently exploring section

### Experience
- Educational background in card format
- Timeline of education:
  - **Batangas State University - TNEU** (2023 - Present)
  - **Anselmo A. Sandoval MNHS** (2021 - 2023)
  - **San Pascual NHS** (2017 - 2021)
- Hover effects with zoom and lift animations

### Projects
- **Mabini Batangas Tourism Landing Page**
  - Link: [View Project](https://motchie00.github.io/Tourism-Landing-Page/)
- **Hoodverse E-commerce**
  - Link: [View Project](https://motchie00.github.io/E-commerce/)
- Clickable project cards that open in new tabs

### Contacts
- Social media links:
  - GitHub: [@motchie00](https://github.com/motchie00)
  - LinkedIn: [Princess Alcazar](https://www.linkedin.com/in/princess-alcazar-3418b9389)

## 🎨 Customization

### Changing Colors

Edit the color scheme in `styles.css`:
- Dark mode colors: Lines 15-19
- Light mode colors: Lines 584-743
- Gradient colors: Various sections throughout

### Updating Content

1. **Profile Information**: Edit the hero section in `index.html` (lines 60-72)
2. **About Section**: Modify lines 107-120 in `index.html`
3. **Experience**: Update the experience cards (lines 164-230)
4. **Projects**: Add/remove project cards (lines 238-296)
5. **Social Links**: Update contact links (lines 315-334)

### Adding New Projects

1. Add a new project card in the Projects section:
   ```html
   <div class="col-md-6 col-lg-5 col-xl-4">
     <a href="YOUR_PROJECT_URL" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
       <div class="project-card neumorphic-slab h-100">
         <div class="project-thumb your-project-class">
           <img src="project-image.png" alt="Project Name" class="project-thumb-img" />
         </div>
         <div class="p-3 d-flex flex-column h-100">
           <h3 class="h6 mb-1">Project Name</h3>
           <p class="small text-soft mb-2">Project description</p>
           <button class="btn btn-project mt-auto">
             <span>View</span>
             <i class="bi bi-arrow-right-short"></i>
           </button>
         </div>
       </div>
     </a>
   </div>
   ```

2. Add CSS for the project thumbnail in `styles.css`:
   ```css
   .project-thumb.your-project-class {
     background: transparent;
   }
   ```

## 📱 Responsive Breakpoints

- **Extra Large** (≥1200px): Full desktop layout
- **Large** (992px - 1199px): Tablet landscape
- **Medium** (768px - 991px): Tablet portrait
- **Small** (576px - 767px): Mobile landscape
- **Extra Small** (<576px): Mobile portrait

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Princess F. Alcazar**

- GitHub: [@motchie00](https://github.com/motchie00)
- LinkedIn: [Princess Alcazar](https://www.linkedin.com/in/princess-alcazar-3418b9389)

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Bootstrap Icons for the icon library
- All the developers who shared knowledge and inspiration

---

**Created by Princess F. Alcazar • 2025**

