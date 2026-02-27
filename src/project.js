const projectData = [
  {
    id: "X-01",
    title: "NEURAL_DASHBOARD",
    description: "Real-time analytics interface with high-frequency data updates.",
    image: "\image\counter.jpg",
    tags: ["React", "WebGL", "Node"],
    link: "file:///D:/WEB%20DEV/WEB%20DEV%20PROJECT/Count%20click/index.html"
  },
  {
    id: "X-02",
    title: "CRYPTO_SHELL",
    description: "Secure terminal-based encryption tool for distributed systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    tags: ["Rust", "Wasm", "Go", "gss", "Rust", "Wasm", "Go"]
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
