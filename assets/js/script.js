// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top
const backBtn = document.getElementById("backToTop");
const toggleBackBtn = () => {
  const show = window.scrollY > 500;
  backBtn.classList.toggle("show", show);
};
toggleBackBtn();
window.addEventListener("scroll", toggleBackBtn, { passive: true });

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
