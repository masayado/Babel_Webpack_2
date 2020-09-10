let numeros_arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]; //array de ejemplo

export default function resultOne(){
    let multiplicacion = numeros_arr.map(element => {
        return element * 4; //se retorna element y se multiplica x 4
    });
    console.log(multiplicacion);

    let filtrar = multiplicacion.filter(mayoraocho => {
        return mayoraocho > 8; //se filtran aquellos elementos mayores a 8
    });
    console.log(filtrar);

    return filtrar;
};