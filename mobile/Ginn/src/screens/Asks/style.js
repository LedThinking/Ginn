import {StyleSheet} from 'react-native';

import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 173,
    height: 173,
    alignSelf: 'center'
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  text: {
    alignItems: 'center'
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textSecondary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F26671'
  },
})

export default styles;