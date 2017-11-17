import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    width: 230,
    height: 48,
  },
});

export default class App extends React.Component {
  signIn = () => console.log('Sign in')

  render() {
    return (
      <View style={styles.container}>
        <Text>Abbeal Expenses</Text>
        <GoogleSigninButton
          style={styles.signInButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Auto}
          onPress={this.signIn}
        />
      </View>
    );
  }
}
