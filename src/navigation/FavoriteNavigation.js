import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import FavoriteScreen from '../screens/Favorite';

const stack = createStackNavigator();

export default function FavoriteNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name="Favorite" component={FavoriteScreen} options={{
                title: "Favoritos",
                headerTitleAlign: 'center'
            }} />
        </stack.Navigator>
    )
}