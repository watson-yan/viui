import Vue from 'vue'
import Message from './message.vue'

// Message列表
const messageBox = document.createElement('div')
document.body.appendChild(messageBox)

const messageComponent = new Vue(Message).$mount(messageBox)
let counter = 1
export default option => new Promise((resolve, reject) => {
  if (!option) {
    reject()
  }
  const temp = counter
  if (typeof option === 'string') {
    messageComponent.queue.push({
      content: option,
      stamp: temp
    })
  }
  if (typeof option === 'object') {
    messageComponent.queue.push({
      caption: option.caption || '',
      content: option.content || '',
      type: option.type || '',
      stamp: temp
    })
  }
  counter++
  setTimeout(() => {
    messageComponent.queue.forEach((item, index) => {
      if (item.stamp === temp) {
        messageComponent.queue.splice(index, 1)
      }
    })
    resolve()
  }, option.duration || 5000)
})
