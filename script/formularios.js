const registro_btn = document.getElementById('btn_registro')
const formRegis = document.getElementById('formRegis')
const closed = document.querySelectorAll('#close')
const btn_prefe = document.getElementById('btn_prefe')
const btn_registrar = document.getElementById('btn_registrar')
const formPrefe = document.getElementById('formPrefe')

btn_prefe.addEventListener('click', () => {
  if(!formPrefe.classList.contains('is-active')) {
    formPrefe.classList.add('is-active')
    formRegis.classList.remove('is-active')
  }
})

closed.forEach(close => {
  close.addEventListener('click', () => {
    if(formRegis.classList.contains('is-active') || formPrefe.classList.contains('is-active')) {
      formRegis.classList.remove('is-active')
      formPrefe.classList.remove('is-active')
    }
  })
})

registro_btn.addEventListener('click', () => {
  if(!formRegis.classList.contains('is-active')) {
    formRegis.classList.add('is-active')
  }
})