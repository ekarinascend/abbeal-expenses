import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './src/screens';
import configureStore from './src/store';

const store = configureStore();
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'SignInScreen',
    title: 'Abbeal Expenses',
  },
});
