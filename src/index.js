// Components
import Pagination from './components/pagination.vue'
import Tabs from './components/tabs.vue'
import Dropdown from './components/dropdown.vue'
import Datepicker from './components/datepicker.vue'
import Select from './components/select.vue'
import Upload from './components/upload.vue'
import Slide from './components/slide.vue'
import ViStyle from './components/style.vue'

// Plugins
import message from './plugins/message/index.js'
import alert from './plugins/alert/index.js'
import confirm from './plugins/confirm/index.js'
import loading from './plugins/loading/index.js'

import './style/viui.css'

export default Vue => {
  // Components
  Vue.component('viStyle', ViStyle)
  Vue.component('Pagination', Pagination)
  Vue.component('Tabs', Tabs)
  Vue.component('Dropdown', Dropdown)
  Vue.component('Datepicker', Datepicker)
  Vue.component('viSelect', Select)
  Vue.component('Upload', Upload)
  Vue.component('Slide', Slide)
  // Plugins
  Vue.prototype.$message = message
  Vue.prototype.$alert = alert
  Vue.prototype.$confirm = confirm
  Vue.prototype.$showLoading = loading.showLoading
  Vue.prototype.$hideLoading = loading.hideLoading
}