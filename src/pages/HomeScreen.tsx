import { View, Platform } from 'react-native';
import { Text, PlatformPressable } from '@react-navigation/elements';
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;