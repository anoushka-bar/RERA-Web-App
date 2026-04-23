// Load PDF
const params = new URLSearchParams(window.location.search);
const file = params.get("file");

document.getElementById("pdf-frame").src = "docs/" + file;

window.onload = function() {
  document.getElementById("viewer-container").classList.add("open");
};

// Back button
function goBack() {
  window.location.href = "index.html";
}

// Toggle summary panel

function toggleSummary() {
  const container = document.getElementById("viewer-container");
  container.classList.toggle("open");
}

// toggleSummary();
