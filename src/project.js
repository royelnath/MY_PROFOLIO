const projectData = [
    {
        id: "01",
        title: "PharmaCare Pro",
        description: "PharmaCare Pro is a modern pharmacy management solution designed to streamline daily operations. Featuring a clean, dual-role interface for pharmacists and cashiers, it simplifies prescription handling, real-time inventory tracking, and secure checkouts. Its intuitive dashboard provides instant insights into stock levels and patient activity, ensuring efficient, patient-centered healthcare delivery.",
        image: "/image/PharmaCare.jpg",
        tags: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
        link: "https://royelnath.github.io/PharmaCare-Pro/"
    },
    {
        id: "02",
        title: "OWN Protfolio",
        description: "The Neon Frontier Theme: Using a dark grid background with neon teal accents (like in your name RoyelNath and the Online status) is a great choice. It makes the site feel technical and high-end.",
        image: "/image/my-website.jpg",
        tags: ["HTML", "CSS", "Javascript"],
        link: "https://royel-blond.vercel.app/ "
    }
];

function renderProjects() {
    const container = document.getElementById('project-grid');
    container.innerHTML = projectData.map(p => `
        <div class="project-card">
            <div class="project-image-wrapper">
                <img src="${p.image || 'https://via.placeholder.com/400x200?text=NO_IMAGE'}" alt="${p.title}">
            </div>
            <div class="card-content">
                <p style="font-size: 10px; color: var(--accent); letter-spacing: 2px;">PROJECT_ID: ${p.id}</p>
                <h3 style="margin: 10px 0; font-family: 'Orbitron'; color: white;">${p.title}</h3>
                <p style="color: #888; font-size: 14px; line-height: 1.6;">${p.description}</p>
                <div class="tech-stack">
                    ${p.tags.map(tag => `<span class="tech-pill">${tag}</span>`).join('')}
                </div>
                
                <a href="${p.link || '#'}" target="_blank" style="text-decoration: none;">
                    <button class="cyber-button" style="margin-top: 20px; width: 100%; padding: 10px; font-size: 12px; cursor: pointer;">
                        OPEN_ARCHIVE
                    </button>
                </a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
