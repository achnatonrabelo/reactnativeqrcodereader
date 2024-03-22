import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const cameraIcon = require('../../assets/icons/switch-camera.png');

export default function CameraArea() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    requestPermission();
  }

  function toogleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      // colors={['rgba(0,0,0,0.8)', '#a29ccf']}
      colors={['#b3ccff', '#ff6666', '#192f6a']}
      style={styles.gradient}
    >
      <CameraView style={styles.camera} facing={facing}>
        <TouchableOpacity onPress={toogleCameraFacing}>
          <Image source={cameraIcon} style={styles.cameraIcon} />
        </TouchableOpacity>
      </CameraView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    borderRadius: 15,
  },
  camera: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    height: '70%',
    borderWidth: 4,
    borderColor: '#fff'
  },
  cameraIcon: {
    width: 64,
    height: 64,
    margin: 10,
  },
  cameraText: {
    fontSize: 16,
    padding: 10,
  }
});