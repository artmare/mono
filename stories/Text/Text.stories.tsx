import { ReactElement } from 'react';

import { Text } from '../../src/components/Text'; 
import type { TextProps } from '../../src/components/Text';

export default {
  title: 'Components/Text',
  component: Text
}

export const TextStory = (args: TextProps): ReactElement => <Text {...args} />;