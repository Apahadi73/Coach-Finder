import { createApp, defineAsyncComponent } from 'vue';
// local imports
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

// lazy imports BaseDialog component
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog.vue')
);

// creates vue app
const app = createApp(App);

// registers router and vuex store
app.use(router);
app.use(store);

// global components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

// mounts app to the dom div element "app"
app.mount('#app');
