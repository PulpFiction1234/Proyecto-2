# Proyecto 2

## 1. Intro

##### Este repositorio es el proyecto solicitado por el staff de UDD Bootcamps DWFS
**PROYECTO 2: Crud app** 
##### a continuacion podran ver el proceso de desarrollo ocupado para esta pagina donde explicaremos algunos pasos y funcionalidad.


------------

## 2. Desarrollo html, css y js

##### Como primer paso de este proyecto se creo un archivo html:5, en el cual debiamos cumplir con ciertos estandares y secciones para tener un proyecto optimo.

###### - Desarrollar prototipado simple, aplicando estándar HTML5 y selectores en CSS.
###### - Sección Header.
###### - Formulario para crear un elemento.
###### - Sección para leer todos los elementos.
###### - Sección para modificar la información de uno de los elementos.
###### - Sección para borrar un elemento seleccionado por el usuario.
###### - Utilizar la estructura de objetos DOM.
###### - Persistir los datos y almacenarlos en window.localStorage.


##### Sabiendo esto comence a trabajar en cada apartado por separado, creando cada uno de ellos en mi archivo html5 y asignandole clases a las etiquetas para asi poder trabajar en sus estilos, desarrollando una seccion a la vez en mis archivos html, css y js.
```html
 <header>
        <nav class="main-nav">
            <ul class="item-nav">
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Juegos</a>
                </li>
                <li>
                    <a href="">Soporte</a>
                </li>
                <li>
                    <a href="">Contacto </a>
                </li>
                <li class="li-user">
                    <a class="a-user" href=""><i class="fa-solid fa-user"></i></a>
                </li>
            </ul>
        </nav>
    </header>
```
##### Una vez creado mi html y creada la primera seccion (header) cree archivo css el cual tuve que linkear a mi archivo html .

```html
<link rel="stylesheet" href="css/crud.css">
```

##### En este archivo se le dieron selectores y estilos a cada una de nuestras secciones dentro del archivo html utilizando clases y etiquetas.
```css
.main-nav{
    background-color: #000080;
    height: 80px;
}

.item-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
}

li{
    margin-left: 50px;
    list-style: none;
}

a{
    text-decoration: none;
    color: #CCCCCC;
    font-size: 20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

``` 
##### Una vez terminada la seccion header comence a trabajar en mi Crud app, creando primeramente un formulario y una tabla trabajando en mi html y css
```html
<section class="crud">
        <h1 class="titulo">Soporte tecnico
        </h1>
        <form id="Registro" class="formulario">
            <input type="text" placeholder="Nombre" id="nombre" class="form_info">
            <input type="email" placeholder="Email" id="correo" class="form_info">
            <input type="text" placeholder="Solicitud" id="descripcion" class="form_info">
            <button type="submit" id="submitbutton" class="button button-primario" >Agregar</button>
        </form>
        <table class="crudtable">
        <thead>
            <tr>
                <th class="tabla_header">Nombre</th>
                <th class="tabla_header">E-mail</th>
                <th class="tabla_header">Descripcion</th>
                <th class="tabla_header">Acciones</th>
            </tr>
        </thead>
        <tbody id="tabla" class="tabla_body">
        </tbody>
        </table>
    </section>
```

##### Una vez lista la tabla comence a dejarla operativa mediante javascrpit, lo primero que hice fue declarar constantes

```javascript
const form = document.getElementById('Registro');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const descripcion = document.getElementById('descripcion');


const tabla = document.getElementById('tabla');

```
##### Luego de esto se me pedia que mi formulario almacenara la informacion en windows.localstorage y agregara los elementos a mi tabla, todo esto fue configurado mediante js
```javascript
function saveDataToLocalStorage(){
    localStorage.setItem('formData', JSON.stringify(data));
}

function renderTable(){
    tabla.innerHTML = '';

    data.forEach (function (item, index){
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const descripcionCell = document.createElement('td');
        const actionCell = document.createElement('td');

        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
    
        nameCell.textContent = item.name;
        emailCell.textContent = item.email;
        descripcionCell.textContent = item.description

        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        editButton.classList.add('button', 'button-segundario');
        deleteButton.classList.add('button', 'button-terciario');


        editButton.addEventListener('click', function(){
            editData(index);
        })

        deleteButton.addEventListener('click', function(){
            deleteData(index);
        })


        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(descripcionCell);
        row.appendChild(actionCell);

  
        tabla.appendChild(row);

    })  
}
```
##### Tambien declaramos una condicion en donde se debian rellenar todos nuestros campos en el formulario
```javascript

let data = JSON.parse(localStorage.getItem('formData')) || []; 


form.addEventListener('submit', function(event){

    event.preventDefault();
    
    const name = nombre.value;
    const email = correo.value;
    const description = descripcion.value;

    if(name && email && description){
        const newData = {name,email,description};
        data.push(newData);
        saveDataToLocalStorage();
        renderTable();

        form.reset();
    }else{
    alert ('Debe llenar todos los campos');

    }
})
```
##### Cabe recordar que nuestro archivo js debe ser linkeado mediante un script a mi archivo html
```html
    <script src="js/crud.js"></script>  
```
##### Teniendo ya completa mi crud app cree una seccion footer la cual fue el ultimo paso para terminar mi proyecto 2: Crud App
```html
   <footer>
        <div class="div-footer">
            <a class="a-footer" href=""><i class="fa-brands fa-instagram"></i></a>
            <a class="a-footer" href=""><i class="fa-brands fa-square-facebook"></i></a>
            <a class="a-footer" href=""><i class="fa-brands fa-twitter"></i></a>
            <a class="a-footer" href=""><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div class="div-footer">
        </div>
        <div class="div-footer2">
            <h2>Contacto</h2>
            <a class="a-footer2" href="">SoporteJueguitos@gmail.com</a>
            <a class="a-footer2" href="">ComprasJueguitos@gmail.com</a>
            <a class="a-footer2" href="">+56 9 9837 2561</a>
        </div>
        <div class="div-footer2">
            <h2>Nosotros</h2>
            <a class="a-footer2" href="">Quienes Somos</a>
            <a class="a-footer2" href="">Terminos</a>
            <a class="a-footer2" href="">Condiciones</a>
        </div>
   </footer>  
```
##### Y con esto di por terminado mi proyecto crud app

## 3. Librerias utilizadas

###### - https://fontawesome.com/search?q=menu&o=r
###### - https://fonts.google.com/
