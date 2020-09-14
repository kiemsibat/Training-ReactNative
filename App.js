import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
const navigation = createStackNavigator({
  Search:SearchScreen,
},{
  initialName:"Search",
  defaultNavigationOptions:{
    title:'Business App'
  }
})

export default createAppContainer(navigation);