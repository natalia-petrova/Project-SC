document.getElementByClass("gallery__img").addEventListener("scroll", myFunction);

function myFunction() {
  document.getElementByClass("gallery__img").innerHTML = "You scrolled in div.";
}