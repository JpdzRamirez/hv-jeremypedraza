import { createApp } from 'vue'
import './assets/scss/HV.scss'
import App from './Welcome.vue'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"


createApp(App).mount('#app')
