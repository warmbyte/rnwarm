import React from 'react';
import {Box} from '@atom';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Box flex={1} width={40} />);
});
