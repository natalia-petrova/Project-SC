function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav__list") {
      x.className += " responsive";
    } else {
      x.className = "nav__list";
    }
  };