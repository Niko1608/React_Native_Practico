import { StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () => {
        console.log("loadMore");
        loadPokemons();
    }
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.FlatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (
                <ActivityIndicator size={"large"} style={styles.spinner} color="#5c6363" />
            )}
        />
    );
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
});