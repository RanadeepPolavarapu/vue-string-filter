import {
  createLocalVue,
  shallow
} from 'vue-test-utils'

import App from '../App.vue'
import VueStringFilter from '../VueStringFilter'

describe('test VueStringFilter', () => {
  it('Test with all default config', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test lowercase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test uppercase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test titlecase', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test capitalize', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test slug', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test truncate', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test cut', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test append', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
    // Test rendered HTML output of the append filter
    expect(wrapper.html()).toContain('This is append string.')
  })
  it('Test replace', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test replace_first', () => {    
    let localVue = createLocalVue()
    
    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })
  })
  it('Test remove', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })

    expect(wrapper.text()).toContain('Lorem ipsum dolor sit amet consectetur adipiscing elit.')
  })
  it('Test remove_first', () => {
    let localVue = createLocalVue()

    localVue.use(VueStringFilter)

    let wrapper = shallow(App, {
      localVue
    })

    expect(wrapper.text()).toContain('Lorem ipsum dolor sit amet consectetur adipiscing, elit.')
  })
});
