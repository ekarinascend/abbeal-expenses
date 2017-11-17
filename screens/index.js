import { Navigation } from 'react-native-navigation';

import SignInScreen from './SignInScreen';

export function registerScreens() {
  Navigation.registerComponent('SignInScreen', () => SignInScreen);
}

export default registerScreens;
