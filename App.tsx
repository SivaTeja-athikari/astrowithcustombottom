// import {Text, View} from 'react-native';
// import React, {Component} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Bottom from './src/components/Bottom';
// import Screen2 from './src/components/Screen2';
// import Home from './src/components/Home';

// const Stack = createNativeStackNavigator();

// class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Bottom" component={Bottom} />
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Screen2" component={Screen2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// export default App;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Astreoid from './src/components/Astreoid';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AstreoidDetails from './src/components/AstreoidDetails';

const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Astreoid" component={Astreoid} />
          <Stack.Screen name="AstreoidDetails" component={AstreoidDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
