import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import TODO from './components/todo.vue'

new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App,TODO}
})
