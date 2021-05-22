const comprar = document.querySelectorAll("#comprar_btn")
const comprar_card = document.getElementById('compra_card')
const registro_btn = document.getElementById('btn_registro')
const formRegis = document.getElementById('formRegis')
const close = document.querySelector('#close')

close.addEventListener('click', () => {
  if(formRegis.classList.contains('is-active')) {
    formRegis.classList.remove('is-active')
  }
})

registro_btn.addEventListener('click', () => {
  if(!formRegis.classList.contains('is-active')) {
    formRegis.classList.add('is-active')
  }
})

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

