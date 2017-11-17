import { Navigation } from 'react-native-navigation';
import SignInScreen from './SignInScreen';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('SignInScreen', () => SignInScreen, store, Provider);
}
