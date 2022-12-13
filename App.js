import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from "expo-constants";

export default function App() {
  return (
    <WebView
      style={styles.container}
      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12"
      source={{ uri: 'https://voidhat.medium.com' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
