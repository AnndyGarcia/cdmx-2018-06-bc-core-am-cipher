# Proyecto *"Cifrado Cesar"* del BootCamp 2018-1 de Laboratoria.
#### Creado por *Andrea Yameli Garcia Sanchez*.

En esta segunda versión (18/06/18) se mantuvo el diseño elemental, con el fin de evitar fatiga visual.

* A nivel tecnico:

Consta de 2 inputs (entradas) para la frase a codificar/decodificar, y la llave (numero de espacios a recorrer).

Posteriormente se encuentran dos botones: "codificar", que realiza la codificacion haciendo el recorrido hacia la derecha,
y "decodificar" que hace lo inverso, recorre hacia la izquierda para mostrar la frase original. Todo mediante la conversion de la
frase a codigo ASCII, la aplicacion de la ecuacion dada por Michelle, y finalmente la conversion de ASCII a alfanumerico.
"Codificar" y "Decodificar" trabajan mediante funciones, integradas en el objeto *window.cipher*, todo en el archivo *cipher.js*.
Este archivo unicamente contiene la funcionalidad, el DOM se mantiene en el archivo *index.js*, que tambien obtiene los valores de los argumentos, y los envia mediante el llamado de las funciones *encode* y *decode* del cipher.
Ambos archivos son enlazados al HTML por la etiqueta script.

Finalmente, en el recuadro final sale el mensaje codificado/decodificado (dependiendo del boton elegido), impreso con un *document.getElementById* en el *index.js*.

* A nivel interfaz:

Se utilizaron colores basicos (blanco, negro, purpura) para evitar molestias visuales, y hacerlo lo mas sencillo posible.
La disposicion de los elementos se baso en querer hacer un producto intuitivo y de empleo facil para los usuarios.
Se intentó hacer la versión web, que dispone de los elementos en dos columnas: de un lado está el cifrado César, y del otro hay una breve explicación del mismo; y tambien la versión móvil, que dispone de todos los elementos en una columna centrada.

Se utilizaron dos tipografías de *Google Fonts*: *Pangolin* para el titlulo, y *Muli* para el cuerpo del documento.

El producto está pensado en cualquier usuario que tenga el objetivo de codificar algun mensaje, por seguridad o diversión.
