import './styles.css';
import { createApp } from 'vue';
import App from './app/App.vue';
import { initTheme } from './composables/useTheme';

initTheme();

const app = createApp(App);
app.mount('#root');
