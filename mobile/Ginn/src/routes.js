import React from 'react';
import Ask from './screens/Asks/index';

import { BottomNavigation, Text } from 'react-native-paper';
import styles from './screens/Asks/style';

function routes() {
  
  const AskRout = () => <Ask />

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'perguntas', title: 'Perguntas'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    perguntas: AskRout,
  });
  
  return (
    <BottomNavigation
      style={styles.navigation}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default routes;