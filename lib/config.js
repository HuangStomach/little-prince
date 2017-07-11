export default {
  get (id, name = '') {
    if (!name || name === '') return null
    try {
      return require(`../src/config/${id}/${name}`)
    } catch (e) {
      return require(`../src/config/common/${name}`)
    }
  }
}
