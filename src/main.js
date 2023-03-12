import { createApp } from 'vue'
import App from './App.vue'
import VeeValidatePlugin from './plugins/validation'
import './assets/main.css'

const app = createApp(App)

app.use(VeeValidatePlugin,{foo:100});
app.mount('#app');
