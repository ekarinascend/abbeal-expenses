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

async function capture() {
  const image = await this.camera.capture();
  return image.path;
}

const CameraScreen = ({ navigator, newPicture }) => {
  const takePicture = () => {
    capture().then((path) => {
      newPicture(path);
      navigator.push({
        screen: 'PhotoConfirmationScreen',
        passProps: { path },
        animated: false,
        navigatorStyle: {
          navBarHidden: true,
        },
      });
    });
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.temp}
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
  newPicture: PropTypes.func,
};

export default CameraScreen;
