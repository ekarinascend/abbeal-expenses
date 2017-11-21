import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import actions from '../reducers/user/actions';

const styles = StyleSheet.create({
  button: {
    color: 'black',
  },
});

const onPress = (signOut) => {
  Alert.alert(
    'FINI ?',
    '', // TODO : add some dummy message
    [
      { text: 'NOPE', style: 'cancel' },
      { text: 'YA !', onPress: signOut },
    ],
    { cancelable: false },
  );
};

const LogoutButton = ({ signOut }) => (
  <TouchableOpacity onPress={() => onPress(signOut)}>
    <Text style={styles.button}>Déconnexion</Text>
  </TouchableOpacity>
);

LogoutButton.propTypes = {
  signOut: PropTypes.func,
};

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(
  null,
  mapDispatchToProps,
)(LogoutButton);
