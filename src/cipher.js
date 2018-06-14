window.cipher = {
    offset : 33,
    string : "",
    encode : (offset, string) => { //Funcion encode que codifica el texto
    //declaracion de arreglos vacios
    let message = [];
    let code = [];
    for(let j = 0; j < string.length; j++){ //for que recorre el string
      if(string.charCodeAt(j)===32){ //Identifica si hay espacios
        message.push(String.fromCharCode("32")); //detecta los espacios y los mantiene
        code.push(String.fromCharCode(string.charCodeAt([j])));
      }
      else if(string.charCodeAt(j)>=97 && string.charCodeAt(j)<=122){ //Se define el limite de recorrido a las letras minusculas en ASCII
        message.push((string.charCodeAt(j) - 97 + parseInt(offset))% 26 + 97); //Convierte las letras del mensaje en codigos ASCII, aplica la formula y las almacena
        code.push(String.fromCharCode(message[j])); //Transforma los codigos ASCII en letras y las almacena
      }
      else if(string.charCodeAt(j)>=65 && string.charCodeAt(j)<=90){ //Se define el limite de recorrido a las letras mayusculas en ASCII
        message.push((string.charCodeAt(j) - 65 + parseInt(offset))% 26 + 65);  //Convierte las letras del mensaje en codigo ASCII, aplica la formula y las almacen
        code.push(String.fromCharCode(message[j])); //Transforma los codigos ASCII en letras y las almacena
      }
    }
    let newCode = code.join(""); //Elimina las comas entre cada elemento del string code, y las guarda en un nuevo string
    return newCode; //Retorna la nueva cadena codificada
    },

    decode : (offset, string) => { //Funcion que decodifica
    //declaracion de arreglos vacios
    let message = [];
    let code = [];
    for(let j = 0; j < string.length; j++){ //for que recorre el string
      if(string.charCodeAt(j)===32){ //Identifica espacios
        message.push(String.fromCharCode("32")); //detecta los espacios y los mantiene
        code.push(String.fromCharCode(string.charCodeAt([j])));
      }
      else if(string.charCodeAt(j)>=97 && string.charCodeAt(j)<=122){ //Se define el limite del recorrido al alfabeto en minusculas
        message.push((string.charCodeAt(j) + 97 + parseInt(offset))% 26 - 97); //Convierte las letras del mensaje en codigo ASCII, aplica la formula y las almacena
        code.push(String.fromCharCode(message[j])); //Convierte los codigos ASCII en letras y las almacena
      }
      else if(string.charCodeAt(j)>=65 && string.charCodeAt(j)<=90){ //Se define el limite del recorrido al alfabeto en mayusculas
        message.push((string.charCodeAt(j) + 65 + parseInt(offset))% 26 - 65); //Convierte las letras del mensaje en codigo ASCII, aplica la formula y las almacena
        code.push(String.fromCharCode(message[j]));  //Convierte los codigos ASCII en letras y las almacena
      }
    }
    let newCode = code.join(""); //Elimina las comas entre cada elemento del string code, y las guarda en un nuevo string
    return newCode; //Retorna la nueva cadena decodificada
  },
};
