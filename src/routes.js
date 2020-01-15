import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';
import Login from '~/pages/Login';

const Auth = createSwitchNavigator({
    Login,
}, { backBehavior: 'history' });

const App = createSwitchNavigator({
    Main
}, { backBehavior: 'history' });


const SwitchNavigator = createSwitchNavigator({
    Splash,
    App,
    Auth
});
export default createAppContainer(SwitchNavigator);