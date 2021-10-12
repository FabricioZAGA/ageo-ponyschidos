// Clases
class Pokemon {
  static algo: string;
  constructor(
    public nombre: string,
    public habilidad: string,
    public pAtaque: number,
    public vida: number
  ) {}
}

const pkm = new Pokemon('Pikachu', 'ImpacTrueno', 40, 100);
console.log(pkm);

// Diseñar una función que permite luchar a 2 o n pokemon
// y nos diga cual es el ganador despues de una resta al ser afectado por los
// otros puntos de ataque.

function pkmFight(Pokemons: Array<Pokemon>): Pokemon {
  let winner: Pokemon;
  Pokemons.forEach((pokemon, index) => {
    if (index < Pokemons.length - 1) {
      var pokemon1Life;
      var pokemon2Life;
      if (winner) {
        pokemon1Life = pokemon.vida - winner.pAtaque;
        pokemon2Life = winner.vida - pokemon.pAtaque;
        pokemon1Life > pokemon2Life ? (winner = pokemon) : (winner = winner);
      } else {
        pokemon1Life = pokemon.vida - Pokemon[index + 1].pAtaque;
        pokemon2Life = Pokemon[index + 1].vida - pokemon.pAtaque;
        pokemon1Life > pokemon2Life
          ? (winner = pokemon)
          : (winner = Pokemon[index + 1]);
      }
    }
  });
  return winner;
}
