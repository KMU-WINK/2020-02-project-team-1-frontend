import Books from '~/api/books'

export default ({ $axios }, inject) => {
  const $api = {
    books: Books($axios)
  }

  inject('api', $api)
}
