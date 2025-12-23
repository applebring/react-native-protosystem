import { View, Image, StyleSheet } from 'react-native';
import { Text, PlatformPressable } from '@react-navigation/elements';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.content}>
        <Image
         style={styles.logo}
          source={require('../assets/images/p_1.png')}
        />
        <View>
          <Text style={styles.title}>小简GoGo</Text>
          <Text>简介：热爱编程，喜欢分享</Text>
          <Text>IP属地：广东</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 0,
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
export default ProfileScreen;