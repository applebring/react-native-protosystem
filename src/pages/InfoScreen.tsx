import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
type ItemProps = { title: string, time: string, photo: any };
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Andy',
    time: '星期四',
    img: require('../assets/images/p_1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'JUDY',
    time: '01-01',
    img: require('../assets/images/p_2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'YAMY',
    time: '12-01',
    img: require('../assets/images/p_3.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d44',
    title: 'YAMY',
    time: '12-01',
    img: require('../assets/images/p_4.png'),
  },
];

const Item = ({ title, time, photo }: ItemProps) => (
  <View style={styles.item}>
    <Image
      style={styles.userImage}
      source={photo}
    />
    <View style={styles.rightContent}>
      <View style={styles.descTop}>
        <Text>{title}</Text>
        <Text style={{fontSize:12}}>{time}</Text>
      </View>
      <View>
        <Text style={styles.subDesc}>您已添加好友{title}</Text>
      </View>
    </View>
  </View>
);
const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} time={item.time} photo={item.img} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  userImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  descTop: {
    flex: 1,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
  },
  subDesc: {
    color: '#888',
  }
});

export default InfoScreen;