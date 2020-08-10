// /* global describe beforeEach it */
//NOT WORKING
// import {expect} from 'chai'
// import React from 'react'
// import enzyme, {shallow, configure} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import {Brands} from './brands'
// import Routes from '../routes'
// import store from '../store/index'
// import App from '../app'
// import { Provider } from 'react-redux';

// const adapter = new Adapter()
// enzyme.configure({adapter})

// describe('Routes Component', () => {
//   it('renders the Brands wrapper', () => {
//     const wrapper = shallow(<Provider store={store}><Routes /></Provider>);
//     expect(wrapper.find(Brands)).to.have.length(1);
//   });
// })

// describe('Brands', () => {
//   let brands

//   beforeEach(() => {
//     brands = shallow(<Brands />)
//     // brands = shallow(<Provider store={store}><Brands /></Provider>)
//   })

//   it('renders brands h1', () => {
//       const welcome = <h1>All Brands</h1>
//     expect(brands.exists(welcome)).to.be.equal(true)
//   })
// })
