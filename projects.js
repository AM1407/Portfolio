/* --- PROJECT DATA --- */
const projects = [
    {
        title: "Portfolio Website",
        description: "A responsive, dark-themed portfolio built with clean HTML/CSS and vanilla JavaScript for performance.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        // Use your own screenshot here!
        image: "img/portfolio-preview.jpg",
        repoLink: "https://github.com/alessiomic/portfolio",
        liveLink: "https://alessiomic.github.io/portfolio" // Optional
    },
    {
        title: "Task Manager App",
        description: "A CRUD application to organize daily tasks. Features local storage and category filtering.",
        techStack: ["Angular", "TypeScript", "Bootstrap"],
        image: "img/task-manager.jpg", // Placeholder
        repoLink: "https://github.com/alessiomic/task-manager",
        liveLink: "" // Leave empty if you don't have a live link yet
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
                .map(tech => `<span>${tech}</span>`)
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