const welcome = document.querySelector(".welcome");
welcome.addEventListener("click", () => {
  welcome.innerHTML = `<h1>Have a Good Time!</h1>`;
});

let sectionBtn = document.querySelector(".action");
let section2 = document.querySelector("#section2");

sectionBtn.addEventListener("click", () => {
  section2.classList.toggle("active");
});
