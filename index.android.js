/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

class ReactNativeBarcodeScannerExample extends Component {
  state = {
    code:'-',
    count:0

  }
  readCode=(e)=>{
    const scanCount = this.state.count+1;
    this.setState({
      code:e.data,
      count:scanCount
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.code}>
        Count:{this.state.count}
      </Text>
        <Text style={styles.code}>
          CodeNo：{this.state.code}
        </Text>
        <BarcodeScanner
        onBarCodeRead={this.readCode}
        style={styles.scanner}
        // torchMode='off|on'
        //  viewFinderBackgroundColor="#fff000"
        //  viewFinderBorderColor="#fff000"
        //  viewFinderBorderWidth = {0}
        // viewFinderBorderLength = {200}
        // viewFinderDrawLaser = {false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  code: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
  },
  count:{
    fontSize: 30,
  },
  scanner:{
    width:300,
    height:300
  }
});

AppRegistry.registerComponent('ReactNativeBarcodeScannerExample', () => ReactNativeBarcodeScannerExample);
