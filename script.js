
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("tr").forEach(row => {
    row.addEventListener("mouseover", () => row.style.opacity = "0.8");
    row.addEventListener("mouseout", () => row.style.opacity = "1");
  });
});
