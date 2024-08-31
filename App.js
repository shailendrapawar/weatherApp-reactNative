
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {

  const myStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <myStack.Navigator>

        <myStack.Screen
          name='home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <myStack.Screen
          name='Forecast'
          component={Detail}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "white",
              // color: "white"
            }
          }}
        />

      </myStack.Navigator>
    </NavigationContainer>


  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
