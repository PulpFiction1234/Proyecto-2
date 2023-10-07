const form = document.getElementById('Registro');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const descripcion = document.getElementById('descripcion');


const tabla = document.getElementById('tabla');


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


function editData(index){
    const item = data[index];
    nombre.value = item.name;
    correo.value = item.email;
    descripcion.value = item.description;
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

function deleteData(index){
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

renderTable();