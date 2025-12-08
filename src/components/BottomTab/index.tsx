import {View,Text} from 'react-native';
import * as React from 'react';
// 声明返回的是React.Node类型

// export function BottomTab(): React.ReactNode {
//   return (<View style={styles.tabContainer}>
//     <Text>底部</Text>
//   </View>)
// }
const BottomTab: React.FC = () => {
  return (<View style={styles.tabContainer}>
    <Text>底部</Text>
  </View>)
}
const styles ={
  tabContainer:{

  }
}
export default BottomTab;