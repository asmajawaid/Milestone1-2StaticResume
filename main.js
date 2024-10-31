// // Get the toggle button and the skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillssection = document.getElementById('skills-section');
// Add a click event to the button to toggle visibility
toggleSkillsBtn.addEventListener("click", function () {
    if (skillssection.style.display === "none") {
        skillssection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills Section";
    }
    else {
        skillssection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills Section";
    }
});
// const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement | null;
// const skillssection = document.getElementById('skills-section') as HTMLElement | null;
// if (toggleSkillsBtn && skillssection) {
//   toggleSkillsBtn.addEventListener('click', () => {
//     skillssection.classList.toggle('hidden');
//   });
// }
// toggleSkillsBtn?.addEventListener('click', () => {
//   skillssection?.classList.toggle('hidden');
// });
