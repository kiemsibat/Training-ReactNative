import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './components/context/BlogContext';
import IndexScreen from './components/screens/IndexScreen';
import ShowScreen from './components/screens/ShowScreen';
import CreateScreen from './components/screens/CreateScreen';
import EditScreen from './components/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Index:IndexScreen,
    Show:ShowScreen,
    Create:CreateScreen,
    Edit:EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs List',
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
