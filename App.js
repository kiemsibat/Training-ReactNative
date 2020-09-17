import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './components/context/BlogContext';
import IndexScreen from './components/screens/IndexScreen';
import ShowScreen from './components/screens/ShowScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show:ShowScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
