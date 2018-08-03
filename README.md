# Proyecto *"Cifrado Cesar"* del BootCamp 2018-1 de Laboratoria.
#### Creado por *Andrea Garcia*.

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

## Uso e instalación

### Usuario habitual

Para poder usar esta herramienta de cifrado únicamente requieres de un _dispositivo_ (computadora, smartphone, tablet) con _conexión a internet_, y un _navegador web_ (Chrome, Firefox, Internet Explorer, etc.).

Debes acceder a esta [liga](https://anndygrs.github.io/cdmx-2018-06-bc-core-am-cipher/src/) y sigue las sencillas instrucciones que encontraras en la pagina.

### Desarrollador

Si quieres contribuir a la mejora de este proyecto, es necesario que cumplas ciertos requerimientos:

* Tener un editor de texto, como [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/), o el de tu preferencia.
* Para ejecutar los comandos a continuación necesitarás una _UNIX Shell_, que es un programa que interpreta líneas de comando (command-line interpreter) así como tener [git](https://git-scm.com/book/es/v1/Empezando-Instalando-Git) instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente _git_ también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win).
* Tener instalado [Node.js](https://nodejs.org/en/) para poder ejecutar las pruebas unitarias.

Teniendo listo lo anterior, debes seguir estos pasos:

* Primero, debes _forkear_ este repositorio.
* _Clona_ **tu** repositorio a tu computadora (copia local).
* Instala las dependencias del proyecto con el comando _npm install_ en tu terminal. 
* Si todo ha ido bien, deberías poder ejecutar las pruebas unitarias (unit tests) con el comando _npm test_, también desde la terminal. Esto debe hacerse **DENTRO** de la carpeta donde está tu clon del proyecto.
* ¡Listo! Ya puedes empezar a codear.

Cuando tengas una propuesta de mejora a nuestro producto, te agradecería mucho que hagas un _pull request_ contándome detalladamente en qué consiste tu propuesta.

### Contáctame

* [Andrea García](https://facebook.com/AnndyGrs)
