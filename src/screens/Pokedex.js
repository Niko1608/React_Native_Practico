import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    console.log("pokemons--->", pokemons);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi();

            const pokemonArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                console.log(pokemonDetails);

                pokemonArray.push({
                    id: pokemonDetails.Id,
                    name: pokemonDetails.name,
                    types: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['oficial-artwork'].front_default
                });
            }

            setPokemons([...pokemons, ...pokemonArray]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <Text>PokeDex</Text>
        </SafeAreaView>
    )
}