const monthTexts = document.querySelectorAll(".month");
const yearTexts = document.querySelectorAll(".year");
const toggleSwitch = document.querySelector("input");

toggleSwitch.addEventListener("click", function (e) {
  for (let i = 0; i < monthTexts.length; i++) {
    if (e.target.checked) {
      yearTexts[i].classList.remove("hide");
      yearTexts[i].classList.add("show");

      monthTexts[i].classList.remove("show");
      monthTexts[i].classList.add("hide");
    } else {
      yearTexts[i].classList.remove("show");
      yearTexts[i].classList.add("hide");

      monthTexts[i].classList.remove("hide");
      monthTexts[i].classList.add("show");
    }
  }
});
