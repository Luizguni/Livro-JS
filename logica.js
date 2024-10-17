const frm = document.querySelector("form") 
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")


frm.addEventListener("submit", (e) => {
e.preventDefault()
const saque = Number(frm.inSaque.value)
if (saque % 10 != 0) {
    alert("Valor Inválido para nostas disponiveis (R$ 10, 50, 100, 200)") 
    frm.inSaque.focus()
    return
}
const notasduzentos = Math.floor(saque / 200)
let resto = saque % 200
const notasCem = Math.floor(resto / 100)
resto = resto = saque % 100
const notasCinquenta = Math.floor(resto / 50)
resto= resto = saque % 50
const notasdez = Math.floor(resto / 10)
if (notasduzentos> 0) {
    resp1.innerText = 'Notas de R$ 200: $ {notasduzentos}'
}
if (notasCem > 0){
    resp2.innerText = 'Notas de R$ 100: $ {notasCem}'
}
if (notasCinquenta > 0){
    resp3.innerText = 'Notas de R$ 50: $ {notasCinquenta}'
}
if (notasdez > 0){
    resp4.innerText = 'Notas de R$ 10: $ {notasDez}'
}
})