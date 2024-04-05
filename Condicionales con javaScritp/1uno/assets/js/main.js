document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("javaScript-image");

  function javaScriptBorder() {
    if (image.classList.contains("border-active")) {
      image.classList.remove("border-active");
    } else {
      image.classList.add("border-active");
    }
  }

  image.addEventListener("click", javaScriptBorder);
});
