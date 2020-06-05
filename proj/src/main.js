import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import "./registerServiceWorker";
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

// filters
Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
