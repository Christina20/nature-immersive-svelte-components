import { configure } from '@storybook/svelte';

import "../static/css/fonts.css"

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
