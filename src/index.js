//declaracion de variables y arreglos vacios

let string = [];
let code = [];

function encodeText() //funcion que codifica el texto
{
  let message = document.getElementById("fraseInicial").value; //message guarda el valor del texto ingresado por el usuario
  let n = parseInt(document.getElementById("key").value); //n guarda el numero que se recorre el encriptado
  for(let j = 0; j < message.length; j++){ //for que recorre el message
    if(message.charCodeAt(j)===32){
      string.push((32)); //detecta los espacios y los mantiene
      code.push(String.fromCharCode(message.charCodeAt([j])));
    }
    else {
      string.push((message.charCodeAt(j))-65+n%26+65); //se convierte cada letra de message en ASCII y se hace el recorrido con la llave del usuario, asi mismo se guarda el mensaje en ASCII en un arreglo string
      code.push(String.fromCharCode(string[j])); //se convierte cada elemento ASCII de string en alfanumerico, y se guarda en code
    }
  }

 let newCode = code.join("");

 document.getElementById("descifrado").innerHTML = (newCode.toUpperCase()); //coloca el mensaje encriptado en un recuadro abajo

 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje encriptado */
 string = []; //vacia la cadena
 code = []; //vacia la cadena
}

function uncodeText() //funcion que decodifica el texto
{
  let message = document.getElementById("fraseInicial").value; //message guarda el valor del texto ingresado por el usuario
  let n = parseInt(document.getElementById("key").value); //n guarda el numero que se recorre el desencriptado
  for(let j = 0; j < message.length; j++){ //for que recorre el message
    if(message.charCodeAt(j)===32){
      string.push((32)); //detecta los espacios y los mantiene
      code.push(String.fromCharCode(message.charCodeAt([j])));
    }
    else {
      string.push((message.charCodeAt(j))+65-n%26-65); //se convierte cada letra de message en ASCII y se hace el recorrido con la llave del usuario, asi mismo se guarda el mensaje en ASCII en un arreglo string
      code.push(String.fromCharCode(string[j])); //se convierte cada elemento ASCII de string en alfanumerico, y se guarda en code
    }
  }

  let newCode = code.join("");

 document.getElementById("descifrado").innerHTML = (newCode.toUpperCase()); //coloca el mensaje desencriptado en un recuadro abajo

 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje desencriptado */
 string = []; //vacia la cadena
 code = []; //vacia la cadena
}
