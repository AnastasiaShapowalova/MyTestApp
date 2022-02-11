import {AuthContext, AuthProvider} from './AuthProvider';
import React, {useEffect, useState} from 'react';

import {Home} from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Register} from '../screens/Register';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {user ? <Home /> : <Register />}
      </NavigationContainer>
    </AuthProvider>
  );
}
