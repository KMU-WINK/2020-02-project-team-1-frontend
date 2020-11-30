export default $axios => ({
  async list () {
    const { data } = await $axios.get('/api/books')
    return data
  },

  async borrow (id) {
    const form = { bookId: id }
    const { data } = await $axios.post('/api/borrow', form)
    return data
  },

  async addBook (book) {
    const { data } = await $axios.post('/api/books', book)
    return data
  }
})
