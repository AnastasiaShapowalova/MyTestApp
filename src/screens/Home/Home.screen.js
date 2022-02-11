import {Button, Center, Text} from 'native-base';
import React, {useContext, useReducer} from 'react';

import {AuthContext} from '../../navigators/AuthProvider';

const Home = () => {
  const {logOut, user} = useContext(AuthContext);
  console.log('user ----', user);

  return (
    <Center flex={1}>
      <Text>Hello {user?.uid}</Text>
      <Button onPress={() => logOut()}>Log out</Button>
    </Center>
  );
};

export default Home;
