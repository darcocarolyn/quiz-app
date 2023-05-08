import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionsScreen from './src/QuestionsScreen/index.js'
import SummaryScreen from './src/SummaryScreen/index.js'


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questions">
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




