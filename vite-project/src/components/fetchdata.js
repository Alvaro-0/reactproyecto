const productos = [
    {
       id: 1,
       nombre: "Camisa",
       precio: 1000,
       categoria:"Negro"
    },
    {
       id: 2,
       nombre: "Camisa",
       precio: 2000,
       categoria:"Blanco" 
    },
    {
       id: 3,
       nombre: "Camisa",
       precio: 3000,
       categoria:"Negro"
    },
    {
       id: 4,
       nombre: "Camisa",
       precio: 4000,
       categoria:"Blanco" 
    },
    {
        id: 5,
        nombre: "Camisa",
        precio: 5000,
        categoria:"Negro" 
     },
     {
        id: 6,
        nombre: "Camisa",
        precio: 6000,
        categoria:"Blanco" 
     },
];

export default function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};