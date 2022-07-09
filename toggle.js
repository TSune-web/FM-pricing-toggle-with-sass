const monthTexts = document.querySelectorAll("#month");
const yearTexts = document.querySelectorAll("#year");
const toggleSwitch = document.querySelector("input");

toggleSwitch.addEventListener("click", function (e) {
  for (let i = 0; i < monthTexts.length; i++) {
    if (e.target.checked) {
      monthTexts[i].classList.remove("hide");
      monthTexts[i].classList.add("show");

      yearTexts[i].classList.remove("show");
      yearTexts[i].classList.add("hide");
    } else {
      monthTexts[i].classList.remove("show");
      monthTexts[i].classList.add("hide");

      yearTexts[i].classList.remove("hide");
      yearTexts[i].classList.add("show");
    }
  }
});
