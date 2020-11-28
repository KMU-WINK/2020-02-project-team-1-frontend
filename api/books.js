export default $axios => ({
  async list () {
    const { data } = await $axios.get('/books/')

    return data
  }
})
