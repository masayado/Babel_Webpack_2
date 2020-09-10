export default function resultTwo(){
    return objJson();
};

function objJson(){
const obj = { name: "John", age: 30, city: "New York" }; //objeto

    console.log(obj);

var myJSON = JSON.stringify(obj); //convertir Json a string
return myJSON;
};