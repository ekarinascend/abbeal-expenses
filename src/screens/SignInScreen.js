import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Config from './../config';

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
  signOutbutton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    this.setupGoogleSignIn();
  }

  async setupGoogleSignIn() { //eslint-disable-line
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: Config.iosClientId,
        webClientId: Config.iosClientId,
        offlineAccess: false,
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log('Current user', user);
      this.setState({ user });
    } catch (err) {
      console.log('Google signin error', err.code, err.message);
    }
  }

  signIn = () => {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user });
      })
      .catch((err) => {
        console.log(err);
      })
      .done();
  }

  signOut = () => {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => this.setState({ user: null }))
      .done();
  }

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <Text>Abbeal Expenses</Text>

        {!user &&
          <GoogleSigninButton
            style={styles.signInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Auto}
            onPress={this.signIn}
          />
        }

        {user &&
          <View>
            <Text>Welcome : {user.name}</Text>
            <TouchableOpacity onPress={this.signOut}>
              <View style={styles.signOutbutton}>
                <Text>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}
