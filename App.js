import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigations/StackNav';




export default function App() {
  return (
    <NavigationContainer>
    <StackNav />
    </NavigationContainer>
  );
}