export default class Api {
  constructor (name, ...args) {
    let o = require(`../model/${name}`)
    this.object = Reflect.construct(o, args)
    this.promise = Promise.resolve()
    this.queue = []
  }
  call (method, params = {}, call = null) {
    // 将待处理的请求推送到队列中等待处理
    this.queue.push({ method, params, call })
    // 待优化，这里如果请求过多会疯狂重新赋值，不知道会不会导致问题
    this.promise = this.promise.then(() => {
      let champion = this.queue.pop()
      return Reflect.apply(Reflect.get(this.object, champion.method),
      this.object, champion.params)
      .then(result => {
        if (champion.call) {
          champion.call.commit({
            type: champion.call.type,
            result
          })
        }
      })
    })
    // 这里因为每次处理的任务并不一定是当前在做的任务 所以commit无法返回准确的信息
  }
  invoke (method, params = {}) {
    if (Reflect.has(this, method) && method !== 'invoke') {
      return Reflect.apply(Reflect.get(this, method), this, params)
    }
    if (Reflect.has(this.object, method)) {
      return Reflect.apply(Reflect.get(this.object, method), this.object, params)
    }
  }
}
