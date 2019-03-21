import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'react-chromatic/storybook-addon';

import '../src/styles/global/index.scss';

import "bootstrap/dist/css/bootstrap.css";

const req = requireContext('../src/stories', true);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
