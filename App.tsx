import React from 'react';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {Button, Stack, Input, Image, Text} from './src';
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
            <Text fontSize={16} lineHeight={20}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              architecto, provident assumenda unde magnam iure alias culpa nobis
              dolorem a minima numquam cumque ut. Nemo ratione voluptas vero
              incidunt nostrum!
            </Text>
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
              <Button colorScheme="pink" label="Im lucky" />
              <Button label="Im not lucky" />
            </Stack>
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
