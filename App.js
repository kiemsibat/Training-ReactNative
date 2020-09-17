import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './components/screens/IndexScreen'
import React from 'react';
import {BlogProvider} from './components/context/BlogContext'
const navigator = createStackNavigator({
  Index:IndexScreen,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'App'
  }
})

const App =  createAppContainer(navigator);

export default () =>{
  return (
    <BlogProvider >
       <App/>
    </BlogProvider>
  )
 

}