document.querySelectorAll(".faq").forEach(function (faq) {
  faq.addEventListener("click", function () {
    var collapsible = this.querySelector(".collapsible");
    var icon = this.querySelector(".material-symbols-outlined");

    if (collapsible) {
      collapsible.classList.toggle("hidden");
    }
    if (icon) {
      icon.textContent =
        icon.textContent.trim() === "visibility_off"
          ? "visibility"
          : "visibility_off";
    }
  });
});

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
