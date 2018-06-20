import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const Login = () => import('@/pages/Login');
const LikingPage = () => import('@/pages/LikingPage');
const CompetitorsPage = () => import('@/pages/CompetitorsPage');

const MAIN_TITLE = ' - Insta Grammofon';

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login' + MAIN_TITLE
      },
      animation: 'fade'
    },
    {
      path: '/liking-page',
      name: 'LikingPage',
      component: LikingPage,
      meta: {
        title: 'Like it' + MAIN_TITLE
      },
      animation: 'fade'
    },
    {
      path: '/competitors-page',
      name: 'CompetitorsPage',
      component: CompetitorsPage,
      meta: {
        title: 'Find a competitor' + MAIN_TITLE
      },
      animation: 'fade'
    }
  ]
});
