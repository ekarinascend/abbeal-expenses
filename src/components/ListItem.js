import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 60,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    marginTop: 5,
    fontSize: 12,
  },
});

const ListItem = ({ title, date }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>
      {format(date, 'MM/DD/YYYY')}
    </Text>
  </View>
);

ListItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.object,
};

export default ListItem;
