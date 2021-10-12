// Destructuring

interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles : Detalles
}

interface Detalles{
    autor:string,
    anio:number,
}

const reproductor:Reproductor={
    volumen:50,
    segundo:36,
    cancion: 'la chona',
    detalles:{
        autor: 'Los tucanes de Tijuana',
        anio: 1995
    }
}

const {volumen,segundo,cancion,detalles:{autor:autorDetalle}} = reproductor;
const {autor} = reproductor.detalles;


console.log('El volumen actual es:', volumen)
console.log('El volumen actual es:', segundo)
console.log('El volumen actual es:', cancion)
console.log('El volumen actual es:', autor)
