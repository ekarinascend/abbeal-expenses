import { Navigation } from 'react-native-navigation';
import SignInScreen from './SignInScreen';

export default function registerScreens() {
  Navigation.registerComponent('SignInScreen', () => SignInScreen);
}
