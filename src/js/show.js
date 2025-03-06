export function ShowHidden() {
  // hide-show
  const btnHide = document.querySelector(".champ-past .btn-hide");
  const btnDisplay = document.querySelector(".champ-past .btn-show");
  const hiddenElements = document.querySelectorAll(".champ-past .hidden");

  if(btnHide && btnDisplay) {
    btnHide.addEventListener("click", function () {
      hiddenElements.forEach(element => element.style.display = "none");
      btnHide.style.display = "none";
      btnDisplay.style.display = "block";
    });
  
    btnDisplay.addEventListener("click", function () {
      hiddenElements.forEach(element => element.style.display = "table-row");
      btnHide.style.display = "block";
      btnDisplay.style.display = "none";
    });
  }
}