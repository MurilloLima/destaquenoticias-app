import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://destaquenoticias.com/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});