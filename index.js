/*1. Crear una función llamada "agregarProducto" que tome dos parámetros: un objeto "producto" con 
las propiedades "nombre", "precio" y "disponible", y un array "productos". La función debe agregar 
el objeto al array y devolver el array actualizado. Si el producto ya existe en el array, la función debe 
devolver un mensaje indicando que ya está en el array.*/

/*const productos = [
  {nombre:"camisa",
  precio: 42342,
  disponible: true,
},


  {nombre:"jean",
  precio: 42342,
  disponible: false,}
]

const producto ={
  nombre:"medias",
  precio: 543,
  disponible: true,
}



const agregarProducto = (producto,productos)=>{
  const result =productos.find(productoArreglo =>productoArreglo.nombre === producto.nombre)
  if(result){
    console.log("Ya registrado")

  }else{
    productos.push(producto)
  }
}
*/



/*2. Crear una función llamada "calcularDescuento" que tome dos parámetros: un número "precio" y un 
objeto "cupon" con las propiedades "codigo" y "descuento". Si el código del cupón es válido 
("DESCUENTO20"), la función debe calcular y devolver el precio con el descuento aplicado. Si el 
código no es válido, la función debe devolver el precio sin descuento.*/

/*const cupon = {
  codigo:"DESCUENTO20",
  descuento:50,
}
const precio = 1000

function calcularDescuento(precio, cupon) {
  if (cupon.codigo === "DESCUENTO20") {
   
    console.log( precio - (precio * cupon.descuento /100 ));
  } else {
    console.log("NO HAY DESCUENTO"+" "+ precio)
  }
}
calcularDescuento (precio,cupon)
*/




/*3. Crear una función llamada "convertirPalabra" que tome un string como parámetro y devuelva el mismo 
string pero con la primera letra en mayúscula y el resto en minúscula.*/

/*const palabra = "camaron"

function convertirPalabra(palabra) {
  console.log(palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())

  
}

convertirPalabra(palabra)*/


/*4.Crear un objeto llamado "alumno" con las propiedades "nombre", "edad" y "notas" (un array con tres 
  números). Luego, crear una función llamada "calcularPromedio" que tome el objeto como parámetro 
  y devuelva el promedio de las notas. Si el promedio es mayor o igual a 7, la función debe devolver 
  un mensaje indicando que el alumno aprobó. Si es menor, debe devolver un mensaje indicando que 
  el*/

 /* const alumno = {
    nombre: "Joaquin Barrabas",
    edad: 45,
    notas: [4,7,8]
  }

  function calcularPromedio(alumno) {
    const{notas}=alumno
    let sumaNotas = 0
    notas.forEach(nota =>  {
      sumaNotas += nota
      
    })

    const promedio = sumaNotas/ notas.length
    if (promedio>=7) {
      console.log("Aprobado")
      
    }else if (promedio >= 0 && promedio <=  6) {
      console.log("Reprobo")
      
    }else{
      console.log("Error")
    }
    
  }
    calcularPromedio(alumno)*/




/*5. Crear una función llamada "buscarProducto" que tome dos parámetros: un array "productos" y un 
string "busqueda". La función debe buscar en el array un producto cuyo nombre contenga la palabra 
buscada (sin importar mayúsculas/minúsculas) y que esté disponible. Si lo encuentra, debe devolver 
el objeto producto. Si no lo encuentra, debe devolver un mensaje indicando que no se encontró el 
producto.*/

/*const busqueda ="arroz"
const productos =  ['arroz','uva','sandia','cama']

function buscarProducto(productos,busqueda) {

  for (let i = 0; i <productos.length; i++){
    if (productos[i] == busqueda) {
      console.log(busqueda + " Encontrado")
      }
    }
  }
buscarProducto(productos,busqueda)*/




/*6. Crear una función llamada "ordenarNumeros" que tome un array de números como parámetro y 
devuelva el mismo array ordenado de menor a mayor*/
/*const numeros=[4,3,8,9,5,2]


function ordenarNumeros(numeros) {
    ordenarNumeros=numeros.sort()
    
}
ordenarNumeros(numeros)
console.log(ordenarNumeros)*/




/*7. Crear un objeto llamado "contacto" con las propiedades "nombre", "email" y "telefono". Luego, crear 
una función llamada "mostrarContacto" que tome el objeto como parámetro y devuelva un string con 
los datos del contacto en formato legible (por ejemplo, "Nombre: Juan - Email: juan@mail.com -
Teléfono: */

/*const contacto = {
nombre: "Maria josefina",
email: "Marianita18@gmail.com",
tel: 313586662425
}

function mostrarContacto(contacto){
  console.log("Nombre: "+contacto.nombre + "--" + "Email: " + contacto.email + " Tel: " + contacto.tel)
}

mostrarContacto(contacto) */


/* 8 Crear una función llamada "calcularIVA" que tome un número como parámetro y devuelva el mismo 
número, pero con el IVA (21%) aplicado*/

/*const precioNormal = 2000
function calcularIVA(precioNormal) {
  const precioconIVA = precioNormal + (precioNormal*12/100)
  console.log("Precio con iva: " + precioconIVA)
  
}

calcularIVA(precioNormal)*/

/*9. Crear una función llamada "filtrarProductos" que tome dos parámetros: un array "productos" y un 
número "precioMaximo". La función debe devolver un nuevo array que contenga solo los productos 
cuyo precio sea menor o igual al precio máximo y que estén disponibles*/

/*const productos=[45,2000.30000,8000,600,800,90000,3]
const precioMaximo=10000

function filtrarProductos(productos,precioMaximo) {
  
const productosMenoroIgual = productos.filter(producto => producto <= precioMaximo)
console.log(productosMenoroIgual)
  
}
 filtrarProductos(productos,precioMaximo)*/


 /*10. Crear una función llamada "reemplazarLetras" que tome un string y dos letras como parámetros. La 
función debe reemplazar todas las apariciones de la primera letra en el string por la segunda letra y 
devolver el string modificado. Luego, crear una variable "mensaje" con un string y llamar a la función 
con el mensaje, la letra "a" y la letra "o" como parámetros. Imprimir en la consola el string modificado*/

/*const palabra = "fsuffhjsdbifusfoshgaaaaaa"
const letra= "o"
function reemplazarLetras(palabra,letra) {
  const mensaje = palabra.replaceAll("a",letra)
  console.log(mensaje)
}

reemplazarLetras(palabra,letra)*/
