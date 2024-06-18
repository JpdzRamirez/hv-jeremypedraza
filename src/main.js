import { createApp } from 'vue'
import './assets/scss/HV.scss'
import App from './Welcome.vue'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

let app = createApp(App)
app.use(ElementPlus);
app.mount('#app');
