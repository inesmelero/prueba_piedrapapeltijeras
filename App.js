
import React from 'react';
import PantallaJuego from './src/screens/piedrapapeltijeras.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PantallaRanking from './src/screens/Ranking.js'



const Stack = createNativeStackNavigator()

export default function App() {

  
  return (
   <NavigationContainer>

    <Stack.Navigator>

      <Stack.Screen name="Pantalla Inicial" component={PantallaJuego}></Stack.Screen>
      <Stack.Screen name="Pantalla ranking" component={PantallaRanking}></Stack.Screen>

    </Stack.Navigator>


   </NavigationContainer>
  );
}

