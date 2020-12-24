import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from './components/svgIcon.vue'
const app = createApp(App)
app.component('SvgIcon',SvgIcon.default || SvgIcon)
app.use(router).mount('#app')
