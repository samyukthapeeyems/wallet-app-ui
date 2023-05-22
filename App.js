import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from './screens';
import {Home} from './screens';
import { Tabs } from './navigation';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
        initialRouteName='Auth'>
        <Stack.Screen name='Auth' component={Auth} />
        <Stack.Screen name='Home' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


