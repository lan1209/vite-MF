import { createApp,defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)
const RemotePage1=defineAsyncComponent(()=>import('remote_app1/page1'))
// const Remote2Page1=defineAsyncComponent(()=>import('remote_app2/page1'))

// const Remote2Page1=defineAsyncComponent(()=>import('remote_app2/page2'))
app.component('RemotePage1',RemotePage1)
// app.component('RemotePage2',Remote2Page1)

app.mount('#app')
