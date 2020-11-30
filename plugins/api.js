import Books from '~/api/books'
import Users from '~/api/users'

export default ({ $axios }, inject) => {
  const $api = {
    books: Books($axios),
    users: Users($axios)
  }

  inject('api', $api)
}
