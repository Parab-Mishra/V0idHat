import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.parentContainer}>
      <WebView
        style={styles.container}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        source={{ uri: 'https://voidhat.medium.com/' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -(parseFloat(Constants.statusBarHeight)*1.5)
  },
  parentContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});
