//Ejercicio 1
//Crea una función que recibe un array, medidasGalpones con objetos con el siguiente formato:
let medidasGalpones = [
    { 
        largo: 50, ancho: 100 
    }
]
function calcularAreaGalpon(medidasGalpones) {
    let galpon = medidasGalpones[0];
    let area = galpon.largo * galpon.ancho;
    return area;
}

/*Ejercicio 2
Crea una función que recibe dos parametros, un número, superficieEdificio y un array maquinas de objetos con el siguiente formato:

{ nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 }
El array contiene diferentes maquinas de una fábrica y sus superficies de operación requeridas en metros cuadrados.
 El número superficieEdificio representa la superficie de uno de los edificios del complejo industrial en metros cuadrados.

La función debe devolver true si al menos una de las máquinas puede ser instalada en el edificio, y false en caso contrario.*/

let superficieEdificio = 500;
let maquinas = [
    { nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 },
    { nombreMaquina: "Prensa Hidráulica", superficieDeOperacionRequerida: 60 },
];

function verificarMaquinasInstalables(superficieEdificio, maquinas) {
    let sumaSuperficiesMaquinas = 0;
    for (let i = 0; i < maquinas.length; i++) {
        sumaSuperficiesMaquinas += maquinas[i].superficieDeOperacionRequerida;
    }
    if (sumaSuperficiesMaquinas <= superficieEdificio) {
        return true;
    } else {
        return false;
    }
}
let sePuedenInstalar = verificarMaquinasInstalables(superficieEdificio, maquinas);
alert('se pueden instalar o no? ${sePuedenInstalar}');

/*Ejercicio 3
Crea una función llamada filtrarInversoresVIP que recibe un array inversores con objetos con el siguiente formato:

{ nombre: "Lopez Mena", capital: 9000000 }
Los objetos representan inversores del proyecto y cuanto capital están dispuestos a aportar.

La función debe devolver un array solo con aquellos inversores que aportan más de 1 millon de dólares.*/

let inversores = [
    {nombre: "Lopez Mena", capital: 9000000}
]
function filtrarInversoresVIP(inversores) {
    return inversores.filter(inversor => inversor.capital > 1000000);
}
let inversoresFiltrados = filtrarInversoresVIP(inversores);
alert(inversoresFiltrados);

/*Ejercicio 4
Crea una función que recibe un array de objetos con el siguiente formato:

Los objetos representan la cantidad de robots de cada tipo que ya se han encargado a construir.

La función debe devolver un objeto <li> por cada objeto del array con el siguiente formato:

*/
let robots [
    { nombre: "Robot Triturador", cantidad: 5 }
]
function devolverObjeto(robots) {
    let resultado = <li class="item-encargado">Robot Triturador: 5</li>;

    for (let robot of robots) {
        resultado[robot.nombre] = robot.cantidad;
    }

    return resultado;
}

/*Ejercicio 5
Crea una clase Robot con al menos 3 propiedades, 2 métodos de instancia y 3 métodos estáticos. Al menos uno de los métodos de instancia
 debe llamar al otro. Cada uno de los métodos estáticos debe devlover una instancia de la clase. Estas instancias deben tener ya cargadas
  propiedades acordes a los tipos de robots mencionados al principio del documento.*/

  class Robot {
    constructor (velocidad, autonomia, operaciones){
        this.velocidad = velocidad;
        this.autonomia = autonomia;
        this.operaciones = operaciones;
    }
    static arrancar(){
        alert('el robot esta encendido');
    }
    static apagar(){
        alert('el robot esta apagado');
    }
    static esperar(){
        alert('el robot esta esperando');
    }
  }

  let robot1 = new Robot(5, 8, 1000);

let robot2 = new Robot(6, 9, 1001);
 robot1.apagar();
robot2.esperar();