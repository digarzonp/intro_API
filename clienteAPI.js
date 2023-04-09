const url="https://jsonplaceholder.typicode.com/todos/";

async function obtenerTodo(id){

    
    const respuesta= await fetch(`${url}${id}`)
    const datos= await respuesta.json();

    procesarJson(datos);

}

function procesarJson(dato){
    console.log(datos);

}