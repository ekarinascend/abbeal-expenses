import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './src/screens';
import store from './src/store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'SignInScreen',
    title: 'Abbeal Expenses',
  },
});
