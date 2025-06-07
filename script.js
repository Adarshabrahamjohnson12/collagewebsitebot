// script.js

// 1. Time-based greeting
window.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good Morning, and Welcome to XYZ College!";
  } else if (hour < 17) {
    greeting.textContent = "Good Afternoon, and Welcome to XYZ College!";
  } else {
    greeting.textContent = "Good Evening, and Welcome to XYZ College!";
  }

  // 2. Fade in effect
  document.body.classList.add("fade-in");

  // 3. Auto-update year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 4. Button click alert (optional)
  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      alert("Redirecting to the main site...");
    });
  }
});
