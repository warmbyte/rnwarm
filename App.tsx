import React from 'react';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {Button, Stack, Input, Image} from './src';
import {ThemeProvider} from './src/theme';

const width = Dimensions.get('screen').width;

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Stack
            px={20}
            flex={1}
            alignItems="center"
            spacing={20}
            pt={width / 4}>
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
              <Button colorScheme="black" label="search" />
              <Button colorScheme="blue" label="I'm feeling lucky" />
            </Stack>
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
