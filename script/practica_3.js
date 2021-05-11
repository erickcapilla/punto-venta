const comprar = document.querySelectorAll("#comprar_btn")
const comprar_card = document.getElementById('compra_card')

comprar.forEach(comprar => {
  comprar.addEventListener("click", compraConfi);
});

function compraConfi(e) {
  if (!comprar_card.classList.contains('confirmacion-active')) {
    comprar_card.classList.add('confirmacion-active')
    setTimeout(() => {
      comprar_card.classList.remove('confirmacion-active')
    }, 3000);
  }
}