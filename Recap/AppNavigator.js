import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const TabNavigator = createBottomTabNavigator({
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
  Screen4: { screen: Screen4 },
});

export default createAppContainer(TabNavigator);
