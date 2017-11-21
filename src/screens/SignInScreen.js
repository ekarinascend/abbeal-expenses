import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
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
});

const SignInScreen = ({ user, signIn }) => (
  <View style={styles.container}>
    {!user &&
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Auto}
        onPress={signIn}
      />
    }
    {user &&
      <ActivityIndicator
        animating={true}
        size={'large'}
      />
    }
  </View>
);

SignInScreen.propTypes = {
  user: PropTypes.object,
  signIn: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = {
  signIn: actions.signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
