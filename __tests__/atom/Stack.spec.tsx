import React from 'react';
import {Box, Stack} from '@atom';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Stack spacing={5}>
      <Box flex={1} width={40} />
      <Box flex={1} width={40} />
    </Stack>,
  );
});
