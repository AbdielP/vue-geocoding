import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "leaflet/dist/leaflet.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import leaflet from "leaflet"

delete leaflet.Icon.Default.prototype._getIconUrl;

leaflet.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


createApp(App).use(router).mount('#app')
