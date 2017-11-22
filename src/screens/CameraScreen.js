import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';

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
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});

const CameraScreen = () => {
  const takePicture = () => (
    this.camera.capture()
      .then(data => console.log(data))
      .catch(err => console.error(err))
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
        <Text
          style={styles.capture}
          onPress={takePicture}
        >
          [CAPTURE]
        </Text>
      </Camera>
    </View>
  );
};

export default CameraScreen;
