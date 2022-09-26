import { lazy } from 'react';


const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/authentication/page404/Page404'));

const routes = [
    { path: '/', name: "Main", component: Main },
    { path: '*', name: "Page404", component: Page404 },
]

export default routes;

