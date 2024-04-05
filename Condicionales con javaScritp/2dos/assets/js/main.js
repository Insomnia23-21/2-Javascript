document.addEventListener("DOMContentLoaded", function () {
  const ordenar = document.getElementById("ordenar");
  const orderStatus = document.getElementById("order-status");
  const quantities = document.querySelectorAll(".quantity");

  ordenar.addEventListener("click", function () {
    let totalQuantity = 0;
    quantities.forEach((quantity) => {
      totalQuantity += parseInt(quantity.value);
    });

    if (totalQuantity <= 10) {
      orderStatus.textContent = `Llevas ${totalQuantity} stickers.`;
    } else {
      orderStatus.textContent = "Llevas demasiados stickers.";
    }
  });
});
