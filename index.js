import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';
import configureStore from './src/store';

configureStore();
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'SignInScreen',
    title: 'Abbeal Expenses',
  },
});
