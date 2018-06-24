import React from 'react'
import App from './../components/views/Hello'
import {mount} from 'enzyme'

test('welcomes the user to React', function () {
    const wrapper = mount(<Hello />)

    expect(wrapper.text()).toContain('Welcome to React')
})