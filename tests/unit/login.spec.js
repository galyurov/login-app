import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login'

describe('Login.vue', () => {
  it('all data Ok', () => {
    const wrapper = shallowMount(Login, {
      data () {
        return {
          email: 'test@email.com',
          password: 'test123'
        }
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
