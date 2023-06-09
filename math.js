//AQUÍ INICIAN LOS CALCULOS PARA EL CUADRADO
console.group ('Cuadrado')
const ladoCuadrado = 5

const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado =  ladoCuadrado * ladoCuadrado

//Forma de imprimir texto usando concatenacion clasica
//console.log("El perimetro cuadrado es: "+ perimetroCuadrado);

//Forma de imprimir texto usando template literals implementando en ECMAScript 6 (ES6)
//console.log(`El area cuadrado es: ${areaCuadrado}`);

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.groupEnd('Cuadrado')

//AQUÍ INICIAN LOS CALCULOS PARA EL TRIANGULO

console.group("Triangulo")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if(lado1 == base){
        console.warn('Este no es un triangulo isosceles')
    } else{
        // h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) /4)
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd("Triangulo")

console.group('TrianguloEscaleno')
//Reto: -Sabiendo lo que miden los 3 lados, 
//encontrar altura de un triangulo escaleno (todos los lados diferentes).

function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3){
    const semiPerimetro = (lado1 + lado2 + lado3) / 2

    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.warn('Este no es un triangulo escaleno')
    } 
    const S = (lado1 + lado2 + lado3)/2
    const S1 = S - lado1
    const S2 = S - lado2
    const S3 = S - lado3

    const H =(2/lado1) * Math.sqrt(S * S1 * S2 * S3)
    const result = Math.floor(H)

    return result

    
    //     else{
    //     altura = ((2/lado1) * (Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))))
    //     return (altura)
    // }
}

// export function solution(lado1, lado2, lado3) {
//     if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
//       return false;
//     }
    
//     const S = (lado1 + lado2 + lado3) / 2;
//     const S1 = S - lado1;
//     const S2 = S - lado2;
//     const S3 = S - lado3;
  
//     const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
//     const result = Math.floor(H);
  
//     return result;
//   }

console.groupEnd('TrianguloEscaleno')

//AQUÍ INICIAN LOS CALCULOS PARA EL CIRCULO

console.group('Circle')
const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI

function calcularCirculo(radio) {
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)

    return{
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

console.groupEnd('Circle')