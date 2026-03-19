let roadmap = [];

const roadmapInput = document.getElementById('roadmapInput');
const roadmapList = document.getElementById('roadmapList');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progressText');

const companyInput = document.getElementById('company');
const statusInput = document.getElementById('status');
const internshipList = document.getElementById('internshipList');

// Add Roadmap
document.getElementById('addRoadmapBtn').addEventListener('click', () => {
  if (!roadmapInput.value) return;

  roadmap.push({ name: roadmapInput.value, done: false });
  roadmapInput.value = '';
  renderRoadmap();
});

// Toggle Task Complete
function toggleTask(index) {
  roadmap[index].done = !roadmap[index].done;
  renderRoadmap();
}

// Render Roadmap
function renderRoadmap() {
  roadmapList.innerHTML = '';

  roadmap.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'task';

    div.innerHTML = `
      <span style="text-decoration:${item.done ? 'line-through' : 'none'}">
        ${item.name}
      </span>
      <button onclick="toggleTask(${index})">✔</button>
    `;

    roadmapList.appendChild(div);
  });

  updateProgress();
}

// Update Progress Bar
function updateProgress() {
  const total = roadmap.length;
  const done = roadmap.filter(t => t.done).length;

  const percent = total ? Math.round((done / total) * 100) : 0;

  progressBar.style.width = percent + '%';
  progressText.innerText = percent + '% Completed';
}

// Add Internship
document.getElementById('addInternshipBtn').addEventListener('click', () => {
  if (!companyInput.value) return;

  const div = document.createElement('div');
  div.className = 'task';

  div.innerHTML = `<span>${companyInput.value} - ${statusInput.value}</span>`;

  internshipList.appendChild(div);

  companyInput.value = '';
});