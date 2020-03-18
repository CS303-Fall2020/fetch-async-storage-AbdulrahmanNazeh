import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/home';
import Details from '../screens/details';
const screens ={
    Home:{
        screen: Home,
        navigationOptions:{
            title:'Home',
            headerStyle:{
                backgroundColor: '#eee'
            }
        }
    },
    Details:{
        screen: Details,
        navigationOptions:{
            title:'Details ',
            headerStyle:{
                backgroundColor: '#eee'
            }
        }
    }
    
}

const HomeStack= createStackNavigator(screens);

export default createAppContainer(HomeStack);