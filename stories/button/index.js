import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, { buttonTheme } from '_components/button'

const ButtonStories = () => {
  storiesOf('Button', module)
    .add('red', () => <Button theme={buttonTheme.red} onClick={action('clicked red')} />)
    .add('blue', () => <Button theme={buttonTheme.blue} onClick={action('clicked blue')} />)
    .add('without props', () => <Button />)
}

export default ButtonStories
