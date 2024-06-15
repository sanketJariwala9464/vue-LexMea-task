import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.mount('#app')
