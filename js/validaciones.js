export function valida(input){
    const tipoDeInput = input.dataset.tipo
    
    if (input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
};

const tipoDeError = [
    'valueMissing',
    'typeMismatch',
];

const mensajePersonalizado = {
    nombre: {
        valueMissing: 'Debe ingresar su nombre'
    },
    email: {
        valueMissing: 'Debe ingresar un correo',
        typeMismatch: 'El campo debe ser del estilo example@algo.algo'
    },
    mensaje: {
        valueMissing: 'Ingrese un mensaje porfavor'
    },
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ''
    tipoDeError.forEach((error) => {
        if (input.validity[error]){
            console.log(error);
            console.log(input.validity[error]);
            console.log(mensajePersonalizado[tipoDeInput][error]);
            mensaje = mensajePersonalizado[tipoDeInput][error]
        }
    })
    return mensaje
};