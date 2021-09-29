import {ValidationError} from 'jest-validate';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  onDownload = () => {
    const url =
      'https://d36hblf01wyurt.cloudfront.net/2d948fdd-0c3f-4d6b-9a9f-d99b96f303c3.jpg';
    let dirs = ReactNativeBlobUtil.fs.dirs;
    ReactNativeBlobUtil.config({
      // response data will be saved to this path if it has access right.
      path: dirs.DownloadDir + '/sample.jpg',
    })
      .fetch('GET', url, {
        //some headers ..
      })
      .then(res => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log('The file saved to ', res.path());
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onDownload}>
          <Text>Download </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    height: '10%',
    backgroundColor: 'pink',
    borderColor: 'black',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
