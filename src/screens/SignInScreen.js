import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Config from './../config';
import actions from '../reducers/user/actions';

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

class SignInScreen extends Component {
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
      this.props.signInSuccess(user);
    } catch (err) {
      console.log('Google signin error', err.code, err.message);
      this.props.signInError(err);
    }
  }

  signIn = () => {
    this.props.signIn();
  }

  signOut = () => {
    this.props.signOut();
  }

  render() {
    const { user } = this.props;

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
            <TouchableOpacity onPress={() => this.signOut()}>
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

SignInScreen.propTypes = {
  user: PropTypes.object,
  signIn: PropTypes.func,
  signInSuccess: PropTypes.func,
  signInError: PropTypes.func,
  signOut: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = {
  signIn: actions.signIn,
  signInSuccess: actions.signInSuccess,
  signInError: actions.signInError,
  signOut: actions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
