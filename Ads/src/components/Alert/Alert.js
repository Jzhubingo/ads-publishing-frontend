const Alert = {}

Alert.install = (Vue) => {
  Vue.prototype.$alert = (options) => {
    if (typeof options === 'string') {
      let text = options
      options = {}
      options.message = text
    } else {
      options = options || {}
      options.message = options.message || '消息内容'
    }
    options.type = options.type || 'success'
    options.timeout = options.timeout || 2000
    let AlertTpl = Vue.extend({
      template: `<div style="z-index: 10000;position:fixed; right: 35%; top: -100px; margin: 80px; padding: 5px 10px; transition: all .5s;" class=" g-alert alert alert-${options.type} fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button><span style="padding: 0 20px;">${options.message}</span></div>`
    })
    let tpl = new AlertTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(() => {
      tpl.style.top = '0'
    }, 0)
    setTimeout(() => {
      tpl.style.opacity = '0'
      tpl.style.top = '-100px'
      setTimeout(() => {
        document.body.removeChild(tpl)
      }, 500)
    }, options.timeout)
  }
}

export default Alert
