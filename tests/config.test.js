import { shallow, render, mount } from 'enzyme'
import 'babel-polyfill'
import 'raf-polyfill'

global.shallow = shallow
global.render = render
global.mount = mount

// Fail tests on any console error
console.error = message => {
  throw new Error(message)
}

window.matchMedia =
  window.matchMedia || // eslint-disable-next-line func-names
  function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }
