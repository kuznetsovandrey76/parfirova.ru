// import { matchPath } from 'react-router';

// import AccountPage from './components/pages/account-page';

// import store from './store';

// import { fetchVersion } from './ducks/app-duck';

// import {
//   ACCOUNTS_ROUTE,
// } from './constants/routes-params';

// // -----------------------------------------------------------------------------

// const routeDefs = [
//   {
//     name: 'accounts',
//     path: ACCOUNTS_ROUTE,
//     component: AccountsPage,
//     exact: true,
//   },
// ];

// // -----------------------------------------------------------------------------

// // clean our custom route definition to only use explicit react-router props
// function cleanRouteDef(routeDef) {
//   return {
//     path: routeDef.path,
//     component: routeDef.component,
//     exact: routeDef.exact,
//     strict: routeDef.strict,
//   };
// }

// // expects location object from history api
// function handleLocationChange(location) {
//   const { pathname } = location;

//   let match = null;
//   const foundRoute = routeDefs.find((route) => {
//     match = matchPath(pathname, cleanRouteDef(route));
//     return match;
//   });

//   if (foundRoute && foundRoute.onMatch) {
//     foundRoute.onMatch(match);
//   }
// }

// // Public Exports --------------------------------------------------------------
// export function onRoute(history, routeName) {
//   if (!routeName) {
//     return false;
//   }

//   return history.location.pathname.indexOf(routeName) !== -1;
// }

// // TODO: extend this function in phase 2
// export function hasPermissionOnRoute(history, permissions) {
//   if (!permissions || (!permissions.jobs && !permissions.users && !permissions.accounts)) {
//     history.push(NO_PERMISSIONS_ROUTE);
//     return;
//   }

//   if (
//     (permissions.jobs || permissions.users || permissions.accounts || permissions.division || permissions.statistics) &&
//     onRoute(NO_PERMISSIONS_ROUTE)
//   ) {
//     history.push(JOBS_ROUTE);
//     return;
//   }

//   if (
//     (onRoute(history, USERS_ROUTE) && !permissions.users) ||
//     (onRoute(history, JOBS_ROUTE) && !permissions.jobs) ||
//     (onRoute(history, ACCOUNTS_ROUTE) && !permissions.accounts) ||
//     (onRoute(history, DIVISIONS_ROUTE) && !permissions.division) ||
//     (onRoute(history, STATISTICS_ROUTE) && !permissions.statistics)
//   ) {
//     history.push(JOBS_ROUTE);
//   }
// }

// export function registerHistory(history) {
//   history.listen(handleLocationChange);
//   setTimeout(() => {
//     handleLocationChange(history.location);
//   }, 0);
//   return history;
// }

// export function url(name, params = {}) {
//   const foundRoute = routeDefs.find((route) => route.name === name);

//   if (foundRoute) {
//     return Object.keys(params).reduce((accu, key) => accu.replace(`:${key}`, params[key]), foundRoute.path);
//   }

//   throw new Error(`No named route found '${name}'`);
// }

// // -----------------------------------------------------------------------------

// const routes = routeDefs.map(cleanRouteDef);

// export default routes;
