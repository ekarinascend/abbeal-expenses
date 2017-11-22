import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 45,
    marginBottom: 30,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { height: 3, width: 0 },
    shadowColor: 'black',
  },
});

const CameraScreen = ({ navigator }) => {
  const takePicture = () => (
    this.camera.capture()
      .then(data => console.log(data))
      .catch(err => console.error(err))
      .finally(() => navigator.popToRoot())
  );

  return (
    <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
      >
        <TouchableOpacity onPress={takePicture}>
          <Icon
            name="camera"
            style={styles.capture}
          />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

CameraScreen.propTypes = {
  navigator: PropTypes.object,
};

export default CameraScreen;
