import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import actions from '../reducers/user/actions';
import LogoImg from '../assets/images/sign-in-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2c',
    alignItems: 'center',
  },
  signInButton: {
    width: '90%',
    height: 60,
    marginTop: '10%',
  },
  logo: {
    marginTop: '20%',
    width: '50%',
    resizeMode: 'contain',
  },
});

const SignInScreen = ({ user, signIn }) => (
  <View style={styles.container}>
    <Image source={LogoImg} style={styles.logo} />
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
