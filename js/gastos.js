//variable para los selectores

const formulario = document.getElementById('agregar-gastos');
const listadogasto = document.getElementById('#gasto ul');

//creacion presupuesto
eventlisters();
function eventlisters() {
    document.addEventListener('DOMContentLoaded', preguntarpresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}


//crear clase principal
class Presupuesto {
    constructor(Presupuesto) {
        this.presupuesto = Number(Presupuesto);
        this.restante = Number(Presupuesto)
        this.gasto = [];
    }
    nuevoGasto(gasto){
        this.gastos=[... this.gastos,gasto];
        this.calcuresta();
    }
    calcuresta(){
        
    }
}

//clase que maneja la interfaz
class UI {
    insertarpresupuesto(cantidad) {
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.presupuesto;
    }
    imprimiralerta() {
        const divmensaje = document.createElement('div');
        divmensaje.classistir.edd('text-center', 'alert');

        //si es de tipo error se agrega clase
        if (tipi === 'error') {
            divmensaje.classList.add('alert-danger');
        } else {
            divmensaje.classList.add('alert-primary');
        }
        //mensaje error
        divmensaje.textContent = mensaje;
        //insert en el DOM
        document.querySelector('.contenido-principal').insertBefore(divmensaje, formulario);

        //programar el tiempo que dura la alerta
        setTimeout(() => {
            document.querySelector('.contenido-principal .alert').remove();
        }, 3000);
    }
    //inswrtar el gasto enla lista
    agregarGastolistado(gastos){

    }
}

//crear objeto de UI
const ui = new UI();
let presupuesto;

function preguntarpresupuesto() {
    const valorpre = prompt('Ingresar valor de presupuesto');

    //validar lo ingresado por el ususario
    if (valorpre === '' || valorpre === null || isNaN(valorpre || valorpre <= 0)) {
        window.location.reload();
    }
    //PRESUPUESTO VALIDO
    presupuesto = new Presupuesto(valorpre);

    console.log(valorpre);
    //mstrar en el html 
    ui.insertarpresupuesto(presupuesto)
}

function agregarGasto(e) {
    e.preventDefult();

    //definir variable formulario
    const Nombre = document.querySelector('#gasto').value;
    const valor = Number(document.querySelector('#cantidad').value);
    //validar nombre 
    if (Nombre === '' || valor === '') {
        ui.imprimiralerta('ambos campos son obligatorios', 'error');
    } else if (valor < 0 || isNaN(valor)) {
        ui.imprimiralerta('vbalor no valido', 'error',)
    }
}