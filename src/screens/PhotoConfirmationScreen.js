import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import actions from '../reducers/expenses/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  actions: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  cancel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  confirm: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    fontSize: 45,
    backgroundColor: 'transparent',
    color: 'white',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { height: 3, width: 0 },
    shadowColor: 'black',
  },
});

const PhotoConfirmationScreen = ({
  base64,
  onDismiss,
  onConfirm,
  navigator,
}) => {
  const imgSrc = `data:image/jpeg;base64,${base64}`;
  const dismissPicture = () => {
    onDismiss();
    navigator.pop({
      animated: false,
    });
  };

  const confirmPicture = () => {
    onConfirm();
    navigator.popToRoot();
  };

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={dismissPicture}
          style={styles.cancel}
        >
          <Icon
            name="times"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={confirmPicture}
          style={styles.confirm}
        >
          <Icon
            name="check"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {base64 &&
        <Image
          style={styles.image}
          source={{ uri: imgSrc }}
        />
      }
    </View>
  );
};

PhotoConfirmationScreen.propTypes = {
  base64: PropTypes.string,
  onDismiss: PropTypes.func,
  onConfirm: PropTypes.func,
  navigator: PropTypes.object,
};

const mapStateToProps = state => ({
  base64: state.expenses.picture.base64,
});

const mapDispatchToProps = {
  onDismiss: actions.dismissPicture,
  onConfirm: actions.confirmPicture,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoConfirmationScreen);
