/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes.js';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F26671',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);