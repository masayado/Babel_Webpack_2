import resultOne from "./one";
import resultTwo from "./two";

export default function three(){ //funcion para invocar funciones presentes en one and two
    return{
        "status": "OK",
        "one": resultOne(),
        "two": resultTwo(),
        }
};
