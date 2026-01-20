/* --- PROJECT DATA --- */
const projects = [
    {
        title: "KotCompass, Front-End School Project",
        description: "An immobilien web application for students to find shared housing. A dashboard makes management easier for renter and landlord. ",
        techStack: ["Angular |", "Laravel |", "MySQL |", "Stripe implementation"],
        image: "img/kotcompass.png",
        repoLink: "https://github.com/woutvanlommel/TheBuggyLandlords",
    },
    {
        title: "Santa Claus' Webshop",
        description: "A typescript webshop project with Vite imitating an e-commerce site for Santa Claus' gifts. " +
            "Because of JSON server usage does the live link not work without setting up a JSON and vite server locally."
            ,
        techStack: ["Vite |", "TypeScript |", "Bootstrap"],
        image: "img/SW_scrsh.png", // Placeholder
        repoLink: "https://github.com/AM1407/SantaWebshop",
        liveLink: "https://am1407.github.io/SantaWebshop/" // Leave empty if you don't have a live link yet
    },
    {
        title: "Chinese Zodiac App",
        description: "A simple web application that determines your Chinese Zodiac sign based on your birth year.",
        techStack: ["CSS3 |", "Javascript |", "Bootstrap"],
        image: "img/zodiac_scrsh.png", // Placeholder
        repoLink: "https://github.com/AM1407/Chinese-zodiac-app",
        liveLink: "https://am1407.github.io/Chinese-zodiac-app/"
    },
    {
        title: "Portfolio Website",
        description: "A responsive, dark-themed portfolio built with clean HTML/CSS and vanilla JavaScript for performance.",
        techStack: ["HTML5 |", "CSS3 |", "JavaScript"],
        image: "img/portfolio_scrsh.png",
        repoLink: "https://github.com/AM1407/Portfolio",
    },
    {
        title: "Farm Yield Tracker",
        description: "A JS application with JSON integration to track and save farm yields in local storage and a .json file." +
            "The mock API is created with a JSON server and won't run on Github Pages. Instructions are in the repo.",
        techStack: ["CSS3 |", "Javascript |", "Bootstrap |", "JSON"],
        image: "img/farm_yield.png", // Placeholder
        repoLink: "https://github.com/AM1407/farm-yield-tracker",
        liveLink: "https://am1407.github.io/farm-yield-tracker/"
    },
    {
        title: "Vampire Weather App",
        description: "A school project that uses an external weather API to fetch and display weather data.",
        techStack: ["CSS3 |", "Javascript |", "API Integration"],
        image: "img/weather_app.png", // Placeholder
        repoLink: "https://github.com/AM1407/VampireWeatherApp",
    }
];

/* --- RENDER LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('project-list');

    if (projectContainer) {
        projectContainer.innerHTML = '';

        projects.forEach(project => {
            // 1. Create the Tech Stack HTML
            const techHtml = project.techStack
                .map(tech => `<span class="techStack">${tech}  </span>`)
                .join('');

            // 2. Logic: Only show the "Live Demo" button if a link exists
            let liveBtn = '';
            if (project.liveLink) {
                liveBtn = `<a href="${project.liveLink}" target="_blank" class="project-btn live-btn">
                             <i class="fa-solid fa-earth-americas"></i> Live Demo
                           </a>`;
            }

            // 3. Build the Card
            const cardHTML = `
                <div class="project-card">
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-tags">
                            ${techHtml}
                        </div>
                        <div class="card-actions">
                            ${liveBtn}
                            <a href="${project.repoLink}" target="_blank" class="project-btn repo-btn">
                                <i class="fa-brands fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                </div>
            `;

            projectContainer.innerHTML += cardHTML;
        });
    }
});