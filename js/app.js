import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
    })
});

const textArea = document.querySelector('.form-text-area');
textArea.addEventListener('blur', (input)  =>{
    valida(input.target)
});