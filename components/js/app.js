const headerright = document.querySelector(".header-bg");
const tri = document.querySelector(".triangle");
const box = document.querySelector(".hdn-box");

headerright.addEventListener("click", () => {
  box.classList.toggle("active");
  tri.classList.toggle("active");
});
