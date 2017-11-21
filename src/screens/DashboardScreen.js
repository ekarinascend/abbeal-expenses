import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import actions from '../reducers/user/actions';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DashboardScreen = ({
  expenses,
  navigator,
}) => (
  <View style={styles.container}>
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

    <ActionButton
      buttonColor="rgba(201, 201, 201, 1)"
      onPress={() => console.log('action button pressed !') }
    />
  </View>
);

DashboardScreen.propTypes = {
  expenses: PropTypes.array,
  signOut: PropTypes.func,
  navigator: PropTypes.object,
};

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
});

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);
