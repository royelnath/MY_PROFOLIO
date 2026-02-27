/**
 * EDUCATION_DATABASE
 * Add new entries here to update your portfolio
 */
const educationData = [
  {
    year: "2024 — 2028",
    institution: "Dhemaji Engineering College",
    degree: "B.Tech | CSE | India",
    status: "current"
  },
  {
    year: "2021 — 2023",
    institution: "Govt. Gurdan HS School",
    degree: "12th | Nalabri, Assam",
    status: "completed"
  },
  {
    year: "2009 — 2021",
    institution: "Shankardev Shishu Niketan, Namati",
    degree: "10th | Namati Nalabri, Assam",
    status: "completed"
  }
];

function initEducation() {
  const timeline = document.getElementById('education-timeline');
  if (!timeline) return;
  
  timeline.innerHTML = '';

  educationData.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    item.innerHTML = `
            <div class="timeline-dot ${edu.status === 'current' ? 'pulse' : ''}"></div>
            <div class="timeline-content">
                <p class="timeline-date">${edu.year}</p>
                <h3 class="timeline-title">${edu.institution}</h3>
                <p class="timeline-subtitle">${edu.degree}</p>
            </div>
        `;

    timeline.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initEducation();
  // ... your other init functions
});