Portfolio Website - Nicholus Nkonge
Overview
This is a personal portfolio website for Nicholus Nkonge, a passionate Software Engineer, web developer, and graphic designer with interests in Business Intelligence (BI), AI, ML, and data analytics. The website showcases Nicholus's skills, experience, services, portfolio projects, and contact information. It features a modern, responsive design with a style switcher for theme customization and a typing animation for a dynamic user experience.

Features
Responsive Design: Adapts to various screen sizes, from mobile to desktop.
Style Switcher: Allows users to change the theme color (5 color options).
Typing Animation: Dynamic text animation on the home section using Typed.js.
Sections:
Home: Introduction with a profile image and a "Hire Me" button.
About: Personal information, skills, education, and experience.
Services: Overview of services offered.
Portfolio: Showcase of recent projects.
Contact: Contact information and a form for inquiries.
Smooth Navigation: Sidebar navigation with active state highlighting.
Font Awesome Icons: Used for visual enhancement.
Project Structure
text

Collapse

Wrap

Copy
portfolio/
│
├── css/
│   ├── skins/
│   │   ├── color-1.css  # Default theme (red)
│   │   ├── color-2.css  # Blue theme
│   │   ├── color-3.css  # Orange theme
│   │   ├── color-4.css  # Green theme
│   │   └── color-5.css  # Yellow theme
│   ├── style.css        # Main stylesheet
│   └── style-switcher.css  # Styles for the style switcher
│
├── images/
│   ├── me4.png          # Profile image for the home section
│   └── portfolio/
│       ├── portfolio-1.jpg  # Portfolio project images
│       ├── portfolio-2.jpg
│       ├── portfolio-3.jpg
│       ├── portfolio-4.jpg
│       ├── portfolio-5.jpg
│       └── portfolio-6.jpg
│
├── js/
│   ├── script.js        # Main JavaScript (e.g., typing animation, navigation)
│   └── style-switcher.js  # JavaScript for style switcher functionality
│
├── index.html           # Main HTML file
└── README.md            # Project documentation
Technologies Used
HTML5: Structure of the website.
CSS3: Styling, including Flexbox for layout and responsive design.
JavaScript: Interactivity, including the style switcher and typing animation.
Typed.js: For the typing animation in the home section.
Font Awesome: Icons for navigation and services.
Google Fonts: Poppins and Clicker Script fonts for typography.
Setup Instructions
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari).
A code editor (e.g., VS Code) for customization.
Basic knowledge of HTML, CSS, and JavaScript.


# NewPortfolio
Testing deployment to trigger Vercel redeploy.