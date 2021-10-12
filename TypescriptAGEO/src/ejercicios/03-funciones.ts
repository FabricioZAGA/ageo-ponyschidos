// Funciones

function suma(a:number,b:number):number {
    //return (a+b).toString(); Esto no se puede
    return a+b;    
}

const resultado = suma(10,5);
console.log(resultado)

//Arrow Function
const sumaFlecha=(a:number,b:number):number=>{
    return a+b;
}

// Parametros opcionales
function conversion(numero:number,otro_numero?:number,base:number=2):number{
    return numero*otro_numero*base;
}

const resultConversion = conversion(10,10);
console.log(resultConversion)

interface Pokemon{
    nombre:string,
    pv: number,
    mostrarPv:()=>void;
}

function curar(pokemon:Pokemon,curarP):void {
    pokemon.pv += curarP;
    console.log(pokemon)
}

const nuevoPokemon: Pokemon={
    nombre: "Charmander",
    pv: 50,
    //Tambien podemos precargar las funciones
    mostrarPv(){
        console.log('Puntos de vida', this.pv)
    }
}

curar(nuevoPokemon,70)
nuevoPokemon.mostrarPv()