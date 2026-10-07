# Chandan Kumar Reddy - Personal Portfolio Website

A modern, responsive, professional personal portfolio website designed for **Chandan Kumar Reddy** (Java Full Stack Developer | Fresher). Built with **React JS**, **HTML5**, **CSS3**, and **JavaScript** using a clean modular architecture and developer aesthetics.

---

## 🌟 Key Features

1. **Header & Navigation (`Navbar`)**:
   - Sticky header with glassmorphism backdrop blur on scroll.
   - Real-time scroll progress indicator bar at the top of the viewport.
   - Smooth scrolling navigation to all sections.
   - Dark/Light mode theme switcher with persistent storage (`localStorage`).
   - Mobile responsive slide-out drawer menu.
   - Quick "Download Resume" CTA.

2. **Hero Section (`Hero`)**:
   - Professional introduction tailored for software developer job applications.
   - Live status indicator: `Available for Full-Time Roles | Fresher`.
   - Call-to-actions: `View My Projects`, `Download Resume`, `Contact Me`, and `Interactive ATS Resume Profile`.
   - Interactive developer code terminal card simulating an executable Java class (`ChandanKumarReddy.java`).
   - Profile links (GitHub, LinkedIn, Email).

3. **Stats Ribbon (`Stats`)**:
   - Highlights: `7+ Core Skills`, `6 Mo Hands-on Training`, `2+ Comprehensive Projects`, `100% Truthful Profile`.

4. **About Me (`About`)**:
   - Candidate summary, direct contact cards (Location: Bengaluru, Email, Phone, Specialization).
   - Languages known with visual proficiency bars: English, Telugu, Hindi.
   - Personal hobbies & analytical pursuits: Playing Chess, Solving Sudoku, Sharing Knowledge.

5. **Skills & Capabilities (`Skills`)**:
   - Interactive category filter tabs: `All`, `Frontend`, `Backend`, `Database`, `Fundamentals`.
   - Cards with custom developer icons: Java, React JS, HTML5, CSS3, SQL, DBMS, Data Structures.
   - Badges for proficiency levels (`Proficient`, `Intermediate`) and progress tracks.
   - KodNest training quality guarantee banner.

6. **Training & Education Timeline (`Timeline`)**:
   - Filterable timeline: `Complete Journey`, `Professional Training`, `Formal Education`.
   - Spotlight card on 6-month Full Stack Training at KodNest Technologies, Bengaluru (Aug 2024 - Feb 2025).
   - Academic timeline:
     - B.Tech in ECE - Anantha Lakshmi Institute of Tech & Sciences (2020 - 2024) [72.22%]
     - Intermediate - Nalanda Junior College (2018 - 2020) [92.3%]
     - SSC - Sri Siva Sai Vidhyanikethan School (2017 - 2018) [97%]

7. **Projects (`Projects`)**:
   - **Online Food Delivery Application** (Full-Stack web app with user auth, restaurant catalog, cart, simulated payments, order tracking, admin dashboard).
   - **IoT-Based Home Automation System** (ESP8266/ESP32, mobile app integration, relay modules, sensors, real-time automation).
   - GitHub and Live Demo buttons with interactive placeholder notices.

8. **Strengths (`Strengths`)**:
   - Effective Communication, Teamwork & Collaboration, Time Management, and Meeting Project Deadlines.

9. **Contact Section (`Contact`)**:
   - Quick one-click copy cards for Email and Phone.
   - Interactive contact form with input validation, error handling, and success confirmation.
   - Links to GitHub and LinkedIn profiles.

10. **ATS Resume Viewer (`ResumeModal`)**:
    - Modal popup allowing recruiters to preview, print, or download your ATS-ready resume directly from the browser.

11. **Floating Back-to-Top Button (`BackToTop`)**:
    - Appears when scrolling down to bring the user smoothly back to the top.

12. **Professional Footer (`Footer`)**:
    - `© 2026 Chandan Kumar Reddy. All Rights Reserved.`

---

## 📁 Project Folder Structure

```
chandan-portfolio/
├── public/
│   ├── favicon.svg                  # Custom developer SVG icon
│   └── Chandan_Kumar_Reddy_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Stats/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Timeline/
│   │   ├── Projects/
│   │   ├── Strengths/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── ResumeModal/
│   │   └── BackToTop/
│   ├── context/
│   │   └── ThemeContext.jsx         # Dark / Light mode provider
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for resume details
│   ├── styles/
│   │   ├── variables.css            # Color tokens, fonts, spacing, glassmorphism
│   │   └── global.css               # Resets, animations, utility classes
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run the Project Locally

Open PowerShell or Command Prompt in this folder (`c:\Users\DELL\Desktop\chandan-portfolio`):

### 1. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Links

All content is centralized in **`src/data/portfolioData.js`**. You can update:
- Your GitHub profile URL: `personal.githubUrl`
- Your LinkedIn profile URL: `personal.linkedinUrl`
- Project repositories & live URLs: `projects[].githubUrl` and `projects[].liveUrl`
