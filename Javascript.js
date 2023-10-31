const wesenList = [
    {
        id:1 ,
        nombre: 'Apgadnieks',
        imagen: 'fotos/Apgadnieks.jpg',
        tipo: 'Ave',
        peligrosidad: 'Muy agresivo',
        descripcion: 'Muy majo',
        notas: '',
        
    },{
        id: 2,
        nombre: 'Barbatus',
        imagen: 'fotos/Barbatus.jpg',
        tipo: 'Lobillo',
        peligrosidad: 'Peligroso',
        descripcion: 'Un poco borde',
        notas: '',
    },{
        id: 3,
        nombre: 'Cupiditas',
        imagen: 'fotos/Cupiditas.jpg',
        tipo: 'Monstruo',
        peligrosidad: 'Neutral',
        descripcion: 'Si le cabreas se pone rojo',
        notas: '',
    },{
        id: 4,
        nombre: 'Cucuy',   
        imagen: 'fotos/Cucuy.jpg',
        tipo: 'Anfibio',
        peligrosidad: 'Amigable',
        descripcion: 'No se laba los dientes',
        notas: '',
    },{
        id: 5,
        nombre: 'Dr._Landeaux',
        imagen: 'fotos/Dr._Landeaux.jpg',
        tipo: 'Insecto',
        peligrosidad: 'Amigable',
        descripcion: 'Ojos de mosca',
        notas: '',
    },{
        id: 6,
        nombre: 'Hasenfussige',
        imagen: 'fotos/Hasenfussige.jpg',
        tipo: 'Monstruo',
        peligrosidad: 'Amigable',
        descripcion: 'No tiene huesos',
        notas: '',

    },{
        id: 7,
        nombre: 'Tony',
        imagen: 'fotos/Tony.jpg',
        tipo: 'Monstruo',
        peligrosidad: 'Peligroso',
        descripcion: 'Tiene branquias',
        notas: '',

    },{
        id: 8,
        nombre: 'Harrison',
        imagen: 'fotos/Harrison.jpg',
        tipo: 'Anfibio',
        peligrosidad: 'Amigable',
        descripcion: 'Es muy listo',
        notas: '',

    },{
        id: 9,
        nombre: 'Coleman',
        imagen: 'fotos/Coleman.jpg',
        tipo: 'Insecto',
        peligrosidad: 'Amigable',
        descripcion: 'Le gusta la mierda',
        notas: '',

    },{
        id: 10,
        nombre: 'Stan',
        imagen: 'fotos/Stan.jpg',
        tipo: 'Monstruo',
        peligrosidad: 'Neutral',
        descripcion: 'Es Bromista',
        notas: '',

    }
];
const wesenListElement = document.getElementById("wesen-list");
const nombreInput = document.getElementById("nombre");
const imagenInput = document.getElementById("imagen");
const tipoSelect = document.getElementById("tipo");
const peligrosidadSelect = document.getElementById("peligrosidad");
const descripcionTextarea = document.getElementById("descripcion");
const notasTextarea = document.getElementById("notas");
const guardarBtn = document.getElementById("guardar-btn");
const borrarBtn = document.getElementById("borrar-btn");
let wesenSeleccionado = null;
function mostrarWesen() {
    wesenListElement.innerHTML = "";
    wesenList.forEach(wesen => {
        const listItem = document.createElement("li");
        const imagen = document.createElement("img");
        imagen.src = wesen.imagen;
        imagen.alt = wesen.nombre;
        imagen.classList.add("wesen-imagen");  
        const nombre = document.createElement("span");
        nombre.textContent = wesen.nombre;
        listItem.appendChild(imagen);
        listItem.appendChild(nombre);
        listItem.addEventListener("click", () => mostrarDetalles(wesen));
        wesenListElement.appendChild(listItem);
    });
}
function mostrarDetalles(wesen) {
    wesenSeleccionado = wesen;
    llenarFormulario(wesen);
}
function llenarFormulario(wesen) {
    nombreInput.value = wesen.nombre;
    imagenInput.value = wesen.imagen;
    tipoSelect.value = wesen.tipo;
    peligrosidadSelect.value = wesen.peligrosidad;
    descripcionTextarea.value = wesen.descripcion;
    notasTextarea.value = wesen.notas;  
}
function guardarWesen() {
    if (wesenSeleccionado) {
        wesenSeleccionado.nombre = nombreInput.value;
        wesenSeleccionado.imagen = imagenInput.value;
        wesenSeleccionado.tipo = tipoSelect.value;
        wesenSeleccionado.peligrosidad = peligrosidadSelect.value;
        wesenSeleccionado.descripcion = descripcionTextarea.value;
        wesenSeleccionado.notas = notasTextarea.value;
    } else {
        const nuevoWesen = {
            nombre: nombreInput.value,
            imagen: imagenInput.value,
            tipo: tipoSelect.value,
            peligrosidad: peligrosidadSelect.value,
            descripcion: descripcionTextarea.value,
            notas: notasTextarea.value
        };
        wesenList.push(nuevoWesen);
    }
    limpiarFormulario();
    mostrarWesen();
}
function borrarWesen() {
    if (wesenSeleccionado) {
        const indice = wesenList.indexOf(wesenSeleccionado);
        wesenList.splice(indice, 1);
        limpiarFormulario();
        mostrarWesen();
    }
}
function limpiarFormulario() {
    wesenSeleccionado = null;
    nombreInput.value = "";
    imagenInput.value = "";
    tipoSelect.value = "";
    peligrosidadSelect.value = "";
    descripcionTextarea.value = "";
    notasTextarea.value = "";
}
guardarBtn.addEventListener("click", guardarWesen);
borrarBtn.addEventListener("click", borrarWesen);
mostrarWesen();