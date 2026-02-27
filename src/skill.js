const techStack = {
  languages: [
    { name: "HTML", status: "MASTERED" },
    { name: "CSS", status: "COMPLETE" },
    { name: "JavaScript", status: "PROGRESSING" },
    { name: "c", status: "COMPLETE" },
    { name: "Python", status: "PROGRESSING" }
  ],
  frontend: [
    { name: "React.js", status: "COMPLETE" },
    { name: "Tailwind", status: "COMPLETE" }
  ],
  backend: [
    { name: "Node.js", status: "PROGRESSING" }
  ],
  tools: [
    { name: "Git & GitHub", status: "COMPLETE" },
    { name: "VS Code", status: "COMPLETE" }
  ]
};

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (const [category, skills] of Object.entries(techStack)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';

    categoryDiv.innerHTML = `
            <h4 class="category-title">${category.toUpperCase()}</h4>
            <ul class="skill-list">
                ${skills.map(skill => `
                    <li class="skill-item">
                        <span class="skill-name">> ${skill.name}</span>
                        <span class="skill-status" data-status="${skill.status}">${skill.status}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    grid.appendChild(categoryDiv);
  }
}
renderSkills();