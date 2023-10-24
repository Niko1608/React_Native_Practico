import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorsByPokemonType from "../utils/getColorsByPokemonType"
import { useNavigation } from "@react-navigation/native"

export default function PokemonCard(props) {
    const { pokemon } = props;
    const navigation = useNavigation();

    const pokemonColor = getColorsByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
        navigation.navigate("Pokemon", { id: pokemon.id });
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{ uri: pokemon.imagen }} style={styles.imagen} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 140,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 5,
    },
    imagen: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'white',
        fontSize: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
        textTransform: 'capitalize',
    },
})