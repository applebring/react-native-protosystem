import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
type ItemProps = { title: string; photo: any; height?: number };

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'v5.0 版本发布！Vue3 生态最强大的 3D 开发框架！',
    img: require('../assets/images/m_1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2025年前端最新技术文档',
    img: require('../assets/images/m_2.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'JAVASCRIPT 全新特性大揭秘',
    img: require('../assets/images/m_3.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d44',
    title: 'React Native 实战指南',
    img: require('../assets/images/m_4.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba222',
    title: 'v5.0 版本发布！Vue3 生态最强大的 3D 开发框架！',
    img: require('../assets/images/m_1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63222',
    title: '2025年前端最新技术文档',
    img: require('../assets/images/m_2.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72222',
    title: 'JAVASCRIPT 全新特性大揭秘',
    img: require('../assets/images/m_3.jpg'),
  },
  
];
const TITLE_HEIGHT = 48;

const Item: React.FC<ItemProps> = ({ title, photo, height }) => {
  const imageHeight = height ? Math.max(0, height - TITLE_HEIGHT) : undefined;

  return (
    <View style={styles.homeItem}>
      <Image style={[styles.photo, { height: imageHeight }]} source={photo} resizeMode="cover" />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

function useMasonryColumns<T extends { id: string; img: any }>(data: T[], numColumns = 2, containerWidth = 360) {
  return React.useMemo(() => {
    // compute column width and distribute by shortest column
    const colWidth = Math.floor((containerWidth - 16) / numColumns);
    const columns: T[][] = Array.from({ length: numColumns }, () => []);
    const heights = new Array(numColumns).fill(0);

    data.forEach((item) => {
      const src = Image.resolveAssetSource(item.img as any) || { width: colWidth, height: colWidth };
      const h = Math.round((src.height / src.width) * colWidth) + 48; // include space for title
      // put into shortest column
      const idx = heights.indexOf(Math.min(...heights));
      (columns[idx] as T[]).push({ ...item, __renderHeight: h } as any);
      heights[idx] += h;
    });

    return { columns, colWidth };
  }, [data, numColumns, containerWidth]);
}

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const { columns, colWidth } = useMasonryColumns(DATA, 2, width);

  return (
    <ScrollView style={styles.homeContainer} contentContainerStyle={styles.containerPadding}>
      <View style={styles.columnsContainer}>
        {columns.map((col, idx) => (
          <View style={styles.column} key={`col-${idx}`}>
            {col.map((item: any) => (
              <Item
                key={item.id}
                title={item.title}
                photo={item.img}
                height={(item as any).__renderHeight}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  homeContainer: { flex: 1 },
  containerPadding: { paddingHorizontal: 8 },
  columnsContainer: { flexDirection: 'row', alignItems: 'flex-start' },
  column: { flex: 1, paddingHorizontal: 4 },
  homeItem: {
    marginBottom: 12,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
  },
  photo: { width: '100%' },
  title: { padding: 8, fontSize: 14 },
});
export default HomeScreen;