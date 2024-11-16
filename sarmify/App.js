import GameScreen from './shooter/screens/gameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OverviewScreen from './shooter/screens/overviewScreen';
import MemoryGame from './memory/MemoryGame'; 
import CatcherGame from './sarmaCatcher/catcherGame'; 
import Quiz from './quiz/Quiz';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="MemoryGame" component={MemoryGame} />
        <Stack.Screen name="CatcherGame" component={CatcherGame} />
        <Stack.Screen name="Quiz" component={Quiz} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

