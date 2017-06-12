import Vue from 'vue'
import Loading from './loading.vue'

const loadingBox = document.createElement('div')
document.body.appendChild(loadingBox)

const loadingComponent = new Vue(Loading).$mount(loadingBox)

export default {
  showLoading() {
    loadingComponent.show = true
  },
  hideLoading() {
    loadingComponent.show = false
  }
}
