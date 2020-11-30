export default $axios => ({
  async signin (user) {
    const { data } = await $axios.post('/api/users/register', user)
    return data
  },

  async login (_phone, _password) {
    const form = { phone: _phone, password: _password }
    const { data } = await $axios.post('/api/auth/login', form)
    return data
  },

  async me () {
    const { data } = await $axios.get('/api/users/me')
    return data
  },

  async myBooks () {
    const { data } = await $axios.get('/api/users/me/books')
    return data
  }
})
