import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

function setup() {
  const props = {
    //addTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)

      // expect(enzymeWrapper.find('h1').text()).toBe('todos')
      //
      // const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      // expect(todoInputProps.newTodo).toBe(true)
      // expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })

    // it('should call addTodo if length of text is greater than 0', () => {
    //   const { enzymeWrapper, props } = setup()
    //   const input = enzymeWrapper.find('TodoTextInput')
    //   input.props().onSave('')
    //   expect(props.addTodo.mock.calls.length).toBe(0)
    //   input.props().onSave('Use Redux')
    //   expect(props.addTodo.mock.calls.length).toBe(1)
    // })
  })
})