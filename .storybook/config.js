import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'react-chromatic/storybook-addon';

import '../src/styles/global/index.scss';

const req = requireContext('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
