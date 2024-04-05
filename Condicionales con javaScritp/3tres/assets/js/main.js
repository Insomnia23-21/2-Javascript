document.addEventListener("DOMContentLoaded", function () {
  const ingresar = document.getElementById("ingresar");
  const passwordStatus = document.getElementById("password-status");

  ingresar.addEventListener("click", function () {
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;
    const password = digit1 + digit2 + digit3;

    if (password === "911") {
      passwordStatus.textContent = "Password 1 correcto.";
    } else if (password === "714") {
      passwordStatus.textContent = "Password 2 correcto.";
    } else {
      passwordStatus.textContent = "Password incorrecto.";
    }
  });
});
