import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue(
    {
        render: h => h(App) // Рендерим компонент App, который импортируем из файла ./App.vue
    }
).$mount('#app'); // После этого маунтим всё в div с id="app"
