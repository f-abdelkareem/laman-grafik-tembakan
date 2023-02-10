document.addEventListener("DOMContentLoaded", function() {
    const seasonSelect = document.querySelector("#season-select");
    const teamSelect = document.querySelector("#team-select");
    const playerSelect = document.querySelector("#player-select");
    const title = document.querySelector("#title");
  
    seasonSelect.addEventListener("change", function() {
      title.textContent = `${seasonSelect.value} ${teamSelect.value} ${playerSelect.value}`;
    });

    teamSelect.addEventListener("change", function() {
        title.textContent = `${seasonSelect.value} ${teamSelect.value} ${playerSelect.value}`;
    });
    
    playerSelect.addEventListener("change", function() {
        title.textContent = `${seasonSelect.value} ${teamSelect.value} ${playerSelect.value}`;
    });
});