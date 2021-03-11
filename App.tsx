import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import {Button, Stack, Input, Image} from './src';

const width = Dimensions.get('screen').width;

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack px={20} flex={1} alignItems="center" spacing={20} pt={width / 4}>
        <Image
          resizeMode="contain"
          width={200}
          height={100}
          source={{
            uri:
              'http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png',
          }}
        />
        <Input placeholder="this is placeholder" />
        <Stack
          width={width - 40}
          flexDirection="row"
          spacing={2}
          justifyContent="center">
          <Button label="Im lucky" />
          <Button label="Im not lucky" />
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default App;
