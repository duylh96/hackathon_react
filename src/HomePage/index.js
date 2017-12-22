import {StackNavigator} from 'react-navigation';
import HomePage from './HomePage';
import DetailPage from '../DetailPage/DetailPage';

export default rootNav = StackNavigator({
    Home: {
        screen: HomePage
    },
    Detail: {
        screen: DetailPage
    }
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
});