import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import actions from '../reducers/expenses/actions';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class DashboardScreen extends Component {
  render() {
    const { expenses, navigator, uploadFile } = this.props;

    return (
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
          onPress={() => {
            navigator.push({
              screen: 'CameraScreen',
              passProps: { uploadFile },
              navigatorStyle: {
                navBarHidden: true,
              },
            });
          }}
        />
      </View>
    );
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }
}

DashboardScreen.propTypes = {
  expenses: PropTypes.array,
  navigator: PropTypes.object,
  uploadFile: PropTypes.func,
  fetchExpenses: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
});

const mapDispatchToProps = {
  uploadFile: actions.uploadFile,
  fetchExpenses: actions.fetchExpenses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);
