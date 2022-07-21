import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../telas/Login';



const Stack = createNativeStackNavigator();

export default function Routes({navigation}) {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


 