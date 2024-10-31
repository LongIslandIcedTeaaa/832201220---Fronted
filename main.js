import Vue from 'vue';
import App from './App.vue';
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';

Vue.component('contact-form', ContactForm);
Vue.component('contact-list', ContactList);

new Vue({
  render: h => h(App),
}).$mount('#app');
