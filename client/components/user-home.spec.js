/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(
      <UserHome email="cody@email.com" firstname="Cody" lastname="Pug" />
    )
  })

  xit("renders the user's name in an h1", () => {
    expect(userHome.find('h1').text()).to.be.equal('Cody Pug')
  })
})
