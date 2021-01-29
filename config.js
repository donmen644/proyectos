import { configure } from '@storybook/html';

function loadStories() {
    require('./index.js');

}
configure(loadStories, module);
