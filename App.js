import {AppNavigator} from './src/navigators';
// 1. import `NativeBaseProvider` component
import {NativeBaseProvider} from 'native-base';
import React from 'react';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
