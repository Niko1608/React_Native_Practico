import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import PokedexScreen from '../screens/Pokedex'
import PokemonScreen from '../screens/Pokemon'

const stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name="Pokedex" component={PokedexScreen} options={{
                title: "",
                headerTransparent: true,
                headerTitleAlign: 'center',
            }} />
            <stack.Screen name="Pokemon" component={PokemonScreen} options={{
                title: "", headerTransparent: true,
            }} />
        </stack.Navigator>
    )
}