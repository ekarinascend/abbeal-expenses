import { Navigation } from 'react-native-navigation';
import SignInScreen from './SignInScreen';
import DashboardScreen from './DashboardScreen';
import ExpenseScreen from './ExpenseScreen';
import LogoutButton from '../components/LogoutButton';
import NavbarAvatar from '../components/NavbarAvatar';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('SignInScreen', () => SignInScreen, store, Provider);
  Navigation.registerComponent('DashboardScreen', () => DashboardScreen, store, Provider);
  Navigation.registerComponent('ExpenseScreen', () => ExpenseScreen, store, Provider);
  Navigation.registerComponent('LogoutButton', () => LogoutButton, store, Provider);
  Navigation.registerComponent('NavbarAvatar', () => NavbarAvatar, store, Provider);
}
