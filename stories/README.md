# Stories folder

Storybook files

## Folder structure

* stories
  * index.js
  * button
    * index.js
  * ...

## How to use it

### Main index

This file is responsible for importing all stories to be loaded on storybook

```Javascript
import ButtonStories from './button'

ButtonStories()
```

### Stories

Stories are added on folders related to their component

**Example: Button Component**

Button Stories:

```Javascript
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '_components/button';

const ButtonStories = () => {
  storiesOf('Button', module)
    .add('with text', () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ))
}

export default ButtonStories
```
