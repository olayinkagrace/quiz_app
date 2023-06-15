import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Result from "../screens/Result";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Quiz' component={Quiz}  options={{ headerShown: false }} />
      <Stack.Screen name='Result' component={Result}  options={{ headerShown: false }} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
}
