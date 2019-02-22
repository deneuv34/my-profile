import Vue from 'vue'
// the component
import { library } from '@fortawesome/fontawesome-svg-core'
import fontawesome from '@fortawesome/fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas, far)
fontawesome.config = {
    autoAddCss: false
}
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
