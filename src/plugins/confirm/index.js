import Vue from 'vue'
import Confirm from './confirm.vue'

const confirmBox = document.createElement('div')
document.body.appendChild(confirmBox)

const confirmComponent = new Vue(Confirm).$mount(confirmBox)

export default option => new Promise((resolve, reject) => {
  if (typeof option === 'string') {
    confirmComponent.queue.push({
      content: option,
      callback: resolve,
      cancel: reject
    })
  }
  if (typeof option === 'object') {
    confirmComponent.queue.push({
      caption: option.caption,
      content: option.content,
      type: option.type,
      callback: resolve,
      cancel: reject
    })
  }
})
