import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mockAxios} from './setup'
import waitForExpect from 'wait-for-expect'
import {Button} from 'react-bootstrap'
import AllShoes from './AllShoes'

const adapter = new Adapter()
enzyme.configure({adapter})

const getRequests = () => mockAxios.history.get

describe('AllShoes Component', () => {
  const fakeShoes = [
    {
      id: 1,
      name: 'Fake Jordans',
      price: 100,
      brand: 'Nike'
    },
    {
      id: 2,
      name: 'Fake Blahniks',
      price: 100,
      brand: 'Manolo Blahnik'
    },
    {
      id: 3,
      name: 'Fake Highlanders',
      price: 100,
      brand: 'Stuart Weitzman'
    }
  ]

  xit('renders a list of AllShoes', () => {
    const wrapper = mount(<AllShoes shoes={fakeShoes} />)
    expect(wrapper).to.include.text('Fake Jordans')
    expect(wrapper).to.include.text('Fake Blahniks')
    expect(wrapper).to.include.text('Fake Highlanders')
  })

  xit('renders an Add to Cart Button', () => {
    const wrapper = mount(<AllShoes shoes={fakeShoes} />)
    expect(wrapper).to.containMatchingElement(<Button>"Add to Cart"</Button>)
  })
})

describe('AllShoes Component Interacts with Back-end', () => {
  afterEach(() => mockAxios.reset())
  xit('fetches data from /api/shoes once after the component first mounts', async () => {
    expect(getRequests()).to.have.lengthOf(0)

    mount(<AllShoes />)

    await waitForExpect(() => {
      expect(getRequests()).to.have.lengthOf(1)
      const [getRequest] = getRequests()
      expect(getRequest).to.deep.include({url: '/api/shoes'})
    })
  })

  xit('renders PetList with data retrieved from /api/shoes', async () => {
    const fakeShoes = [
      {
        id: 1,
        name: 'Fake Jordans',
        price: 100,
        brand: 'Nike'
      },
      {
        id: 2,
        name: 'Fake Blahniks',
        price: 100,
        brand: 'Manolo Blahnik'
      },
      {
        id: 3,
        name: 'Fake Highlanders',
        price: 100,
        brand: 'Stuart Weitzman'
      }
    ]

    mockAxios.onGet('/api/shoes').reply(200, fakeShoes)
    const wrapper = mount(<AllShoes />)

    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper).to.include.text('Fake Jordans')
      expect(wrapper).to.include.text('Fake Blahniks')
      expect(wrapper).to.include.text('Fake Highlanders')
    })
  })
})
