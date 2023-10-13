import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import AccountScreen from '../screens/Account';

const stack = createStackNavigator();

export default function FavoriteNavigation() {
    return (
        <stack.Navigator>
            <stack.Screen name="Favorite" component={AccountScreen} options={{
                title: "Mi Cuenta",
                headerTitleAlign: 'center'
            }} />
        </stack.Navigator>
    )
}