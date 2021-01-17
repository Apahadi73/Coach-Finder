import { createRouter, createWebHistory } from 'vue-router';
// import { defineAsyncComponent } from 'vue';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

// lazy imports async components
// const CoachDetail = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetail.vue')
// );

// const CoachRegistation = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachRegistration.vue')
// );

// const ContactCoach = defineAsyncComponent(() =>
//   import('./pages/requests/ContactCoach.vue')
// );

// const RequestsReceived = defineAsyncComponent(() =>
//   import('./pages/requests/RequestsReceived.vue')
// );

// const UserAuth = defineAsyncComponent(() =>
//   import('./pages/auth/UserAuth.vue')
// );

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    {
      path: '/register',
      component: CoachRegistation,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

// performs navigatiion guards before navigation
router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // redirects to the auth page if the unauthenticated user tries to go to guarded page
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    // redirects to the coaches page if the authentication user tries to go to guarded page
    next('/coaches');
  } else {
    next();
  }
});

export default router;
