import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  pokemones: string[]= ['Raychu','Pikachu', 'Squirtle', 'Charmander', 'Pichu'];
  // Propiedad
  PkmElminado:string= "";

  borrarPokemon(){
    // if(this.pokemones.length === 0){
    //   console.log("Vaya te has acabado los pokemones")
    // }else{
    //   // this.pokemones = [];
    //   const eliminado =  this.pokemones.shift()
    //   console.log(this.pokemones)
    // }

    this.PkmElminado = this.pokemones.shift() || "No hay mas pokemones";
    // Uso de ternarios 
  }
}
