import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import actions from '../reducers/user/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutbutton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DashboardScreen = ({ user, signOut }) => (
  <View style={styles.container}>
    <Text>DASHBOARD</Text>
    {user && <Text>Welcome : {user.name}</Text>}
    <TouchableOpacity onPress={signOut}>
      <View style={styles.signOutbutton}>
        <Text>Log out</Text>
      </View>
    </TouchableOpacity>
  </View>
);

DashboardScreen.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);
