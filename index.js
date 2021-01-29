 import { stories0f } from '@storybook/html'

stories0f("Button", module)
.add('with tex', () => '<button class="btn">Hello World</button>')
.add('with emoji', () => {
    const button = document.createElement ('button');
    button.innerText='😃😎👍'