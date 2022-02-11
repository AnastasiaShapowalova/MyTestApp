import {Button, Center, FormControl, Input, Stack} from 'native-base';
import React, {useContext, useState} from 'react';

import {AuthContext} from '../../navigators/AuthProvider';
import {SafeAreaView} from 'react-native-safe-area-context';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {register} = useContext(AuthContext);

  return (
    <SafeAreaView flex={1}>
      <Center flex={1} mx={10}>
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}>
            Email
          </FormControl.Label>
          <Input
            placeholder="email"
            autoCorrect={false}
            onChangeText={useremail => setEmail(useremail)}
          />
          <FormControl.HelperText
            _text={{
              fontSize: 'xs',
            }}>
            email should contain atleast 3 character.
          </FormControl.HelperText>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}>
            Password
          </FormControl.Label>
          <Input
            type="password"
            placeholder="Password"
            onChangeText={userPassword => setPassword(userPassword)}
            autoCorrect={false}
          />
          <FormControl.HelperText
            _text={{
              fontSize: 'xs',
            }}>
            Password should be valid.
          </FormControl.HelperText>
        </FormControl>

        <Button w="100%" mt={4} onPress={() => register(email, password)}>
          Log in
        </Button>
      </Center>
    </SafeAreaView>
  );
};

export default Register;
