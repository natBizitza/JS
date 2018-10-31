// JavaScript source code
//let perro{
//    nombre: 'Milu',
//    ruido: 'Guau',
//    saludar: function(){
//        return this.nombre + 'dice' + this.ruido;
//    }
//};

//function crearAnimal(nombre, ruido) {
//    return {
//        nombre: nombre,
//        ruido: ruido,
//        saludar: function () {
//            return this.nombre + 'dice' + this.ruido;
//        }
//    };
//}

//let gato = crearAnimal('Salem', 'Miao');
//let perro = crearAnimal('Milu', 'Guau');

//console.log(gato.saludar());
//console.log(perro.saludar());

class Animal {
    constructor(nombre, ruido) {
        this.nombre = nombre;
        this.ruido = ruido;
    }
    saludar() {
        return this.nombre +  ' dice ' + this.ruido;
    }
}

//let gato = new Animal("mur", "miao");
//let perro = new Animal("gav", "guao");

//console.log(gato.saludar());
//console.log(perro.saludar());

//let animales = [perro, gato];
//let animales = [new Animal("mur", "miao"), new Animal("gav", "guao")];

//for(let i = 0; i < animales.length; i++) {
//    console.log(animales[i].saludar());
//}

let resultado = '';
//animales.forEach(function (animal) {
//    //console.log(animal.saludar());
//    //resultado += '<p>' + animal.saludar() + '</p>';

//    resultado = resultado + ' ' + animal.saludar();
//});

//document.getElementById('mascotas').innerHTML = '<p>hola mundo</p>';
//document.getElementById('mascotas').innerHTML = resultado;

let animales = [];
let audio = ""


function saludar() {
    let algo = document.getElementById('algo').value;
}

function playAudio() {
    let audio = document.getElementById('algo').value;
}
function crearAnimal() {
    let nombre = document.getElementById('nombre').value;
    let ruido = document.getElementById('ruido').value;
    let newAnim = new Animal(nombre, ruido);
    animales.push(newAnim);
}

function hacerRuido() {

}

//function delete() {

//}

function mostrar() {

    animales.forEach(function (animal) {
        
        resultado += '<li id="' + animal.nombre + '"/>' + animal.saludar() + '</li>';
        resultado += '<input type="button" value= "Ruido" onclick= "mostrarRuido(\' + animal.nombre + \')">';
        resultado += '<input type="button" value= "Delete" onclick= "delete()">';

        document.getElementById('algo').innerHTML = resultado;
        //audio below
        //let audio = document.createElement("audio");
        //document.body.appendChild(audio); 

        //function play() {
        //    var audio = document.getElementById("audio");
        //    audio.play();
        //}
    });
}



function mostrarRuido(nombre) {

    animales.forEach(function (x) {
        if (document.getElementById(nombre) === animales[x].nombre) {
            alert(animales[x].ruido)
        }
    });
  
     

}

