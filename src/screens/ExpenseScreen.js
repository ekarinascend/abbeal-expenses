import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ExpenseScreen = ({ item }) => (
  <View style={styles.container}>
    <Text>EXPENSE DETAILS</Text>
    <Text>{item.title}</Text>
  </View>
);

ExpenseScreen.propTypes = {
  item: PropTypes.object,
};

export default ExpenseScreen;
