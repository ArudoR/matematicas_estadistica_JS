// [1,2,3,4]
function calcularPromedio(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]
    // }

    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    // const sumarTodosElementos = (valorAcumulado, nuevoValor)=> valorAcumulado + nuevoValor;
    const sumaLista = lista.reduce(sumarTodosElementos);

    // const sumaLista = lista.reduce ((a, b) => a + b)

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}