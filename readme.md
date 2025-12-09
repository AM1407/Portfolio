# 🛡️ Alessio Micciche - Portfolio

A clean, modern, and secure-by-design portfolio website built to showcase my journey as a Full Stack Developer. Designed with a focus on dark mode aesthetics, performance, and maintainable code.

---

## ⚡ Features

* **Cyber-Minimalist Design:** A custom dark theme (`#1e1e1e` to `#000`) with electric blue accents (`#3A98FF`) for a high-tech feel.
* **Dynamic Project Loader:** Projects are injected via **JavaScript** from a data array, making it easy to add new work without touching HTML.
* **Smart Navigation:**
    * **Scroll Snap:** Sections lock into place for a premium, app-like feel.
    * **Intersection Observer:** The side navigation dots automatically update based on which section is currently in the "Laser Tripwire" zone (center of screen).
* **Micro-Interactions:** Custom hover effects on cards, typing animations in the hero section, and smooth scaling.
* **Fully Responsive:** Built with **Bootstrap 5** grid and custom Flexbox layouts to look great on mobile and desktop.

---

## 🛠️ Tech Stack

* **Core:** ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
* **Frameworks:** ![Bootstrap](https://img.shields.io/badge/-Bootstrap_5-563D7C?style=flat&logo=bootstrap&logoColor=white)
* **Icons:** FontAwesome 6
* **Tools:** Git, WebStorm

---

## 📂 Project Structure

```text
portfolio/
├── index.html       # Main structure
├── stylesheet.css   # Custom styling & animations
├── app.js           # Main logic for about section
├── projects.js      # Project data & card rendering logic
├── navdots.js       # Scroll spy & navigation logic
├── img/             # Assets (Logos, Avatar, Screenshots)
└── README.md        # Documentation