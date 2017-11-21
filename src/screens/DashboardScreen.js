import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import actions from '../reducers/user/actions';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signOutbutton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DashboardScreen = ({
  user,
  expenses,
  signOut,
  navigator,
}) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      {user && <Text>Welcome : {user.name}</Text>}
      <TouchableOpacity onPress={signOut}>
        <View style={styles.signOutbutton}>
          <Text>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>

    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem
          {...item}
          onPress={() => {
            navigator.push({
              screen: 'ExpenseScreen',
              passProps: { item },
            });
          }}
        />
      )}
    />
  </View>
);

DashboardScreen.propTypes = {
  user: PropTypes.object,
  expenses: PropTypes.array,
  signOut: PropTypes.func,
  navigator: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
  expenses: state.expenses.expenses,
});

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);
