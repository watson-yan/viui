import Vue from 'vue'
import Alert from './alert.vue'

const alertBox = document.createElement('div')
document.body.appendChild(alertBox)

const alertComponent = new Vue(Alert).$mount(alertBox)

export default option => new Promise((resolve) => {
  if (typeof option === 'string') {
    alertComponent.queue.push({
      content: option,
      callback: resolve
    })
  }
  if (typeof option === 'object') {
    alertComponent.queue.push({
      caption: option.caption,
      content: option.content,
      type: option.type,
      callback: resolve
    })
  }
})
