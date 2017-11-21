import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
  },
});

const NavbarAvatar = ({ user }) => (
  <View>
    {user &&
      <Image
        source={{ uri: user.photo }}
        style={styles.avatar}
      />
    }
  </View>
);

NavbarAvatar.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(NavbarAvatar);
