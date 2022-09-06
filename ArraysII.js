//Callback con array dado para usar map

let numeros = [1,2,3];
let dobleDeLosNumeros = numeros.map(function(unNumero){
    return unNumero*2;
});

console.log(dobleDeLosNumeros);

//Callback con array dado para usar filter

let edades =[20,34,16,17,19];
let mayores = edades.filter(function(unaEdad){
    return unaEdad >18;
});

console.log(mayores)

//Callback con array dado para usar reduce()

let numbers = [5,7,16]; 
let resultado = numbers.reduce(function(acumulador,numero){
    return acumulador + numero;
});
console.log(resultado);

//Callback con array dado para usar forEach()

let paises =["Colombia","Argentina","Venezuela","Alemania"];

paises.forEach(function (unPais){
    console.log(unPais);
});


//for (let i=0;i<paises.length;i++){
//    console.log(paises[i]);
//}

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

let promedios=[];
for (let i=0;i<estudiantes.length;i++){
        promedios[i]=estudiantes[i].promedio;
};

let aprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.promedio>=6;
});

let desaprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.promedio<6;
});

console.log(aprobados);
console.log(desaprobados);

let texto = 'Texto';
function loro(texto){
    for (let i=0; i<=4;i++){
        console.log(texto);
        }
};                          