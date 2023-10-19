import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi(nextUrl);
            setNextUrl(response.next);

            const pokemonsArray = await Promise.all(response.results.map(async pokemon => {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

                return {
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen:
                        pokemonDetails.sprites.other["official-artwork"].front_default,
                };
            }))


            setPokemons((currentState) => [...currentState, ...pokemonsArray]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <PokemonList
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}
            />
        </SafeAreaView>
    )
}