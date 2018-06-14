let string = document.getElementById("fraseInicial"); //message guarda el valor del texto ingresado por el usuario
let offset = document.getElementById("key"); //n guarda el numero que se recorre el encriptado
let botonCifrar = document.getElementById("cipher"); //Boton que acciona la funcion encode
let botonDecifrar = document.getElementById("decipher"); //Boton que acciona la funcion decode

botonCifrar.addEventListener("click", event => { //Se agrega la el evento click sobre el boton cifrar
  let encodeText = window.cipher.encode( //se llama a la funcion encode
    offset.value, //se agregan los parametros
    string.value
  );
  document.getElementById("descifrado").innerHTML = (encodeText); //Se sustituye el texto codificado en el cuadro de resultados
});

botonDecifrar.addEventListener("click", event => { //Se agrega la el evento click sobre el boton descifrar
  let decodeText = window.cipher.decode( //se llama a la funcion decode
    offset.value, //se agregan los parametros
    string.value
  );
  document.getElementById("descifrado").innerHTML = (decodeText); //Se sustituye el texto codificado en el cuadro de resultados
});
