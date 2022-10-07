import { lazy } from 'react';
import Ragister from './app/authentication/ragister/Ragister';


const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/authentication/page404/Page404'));
const Login = lazy(() => import('./app/authentication/login/Login'));
const ProfilePage = lazy(() => import('./app/main/profile/ProfilePage'));
const Setting = lazy(() => import('./app/main/setting/Setting'));
const Activity = lazy(() => import('./app/main/activity/Activity'));




const routes = [
    { path: '/', name: "login", component: Login },
    { path: '*', name: "Page404", component: Page404 },
    { path: '/profile-page', name: "ProfilePage", component: ProfilePage },
    { path: '/home', name: "main", component: Main },
    { path: '/ragister', name: "ragister", component: Ragister },
    { path: '/setting', name: "Setting", component: Setting },
    { path: '/activity', name: "Activity", component: Activity },




]

export default routes;

