let numeros_arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

export default function resultOne(){
    let multiplicacion = numeros_arr.map(element => {
        return element * 4;
    });
    console.log(multiplicacion);

    let filtrar = multiplicacion.filter(mayoraocho => {
        return mayoraocho >= 8;
    });
    console.log(filtrar);

    return filtrar;
};