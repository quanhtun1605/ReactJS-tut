import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const AllUsers = Loadable({
  loader: () => import('./components/AllUsers.js'),
  loading: Loading,
});

const CreateUser = Loadable({
  loader: () => import('./components/CreateUser.js'),
  loading: Loading,
});

const DeleteUser = Loadable({
  loader: () => import('./components/DeleteUser.js'),
  loading: Loading,
});

const UpdateUser = Loadable({
  loader: () => import('./components/UpdateUser.js'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/allusers', exact: true, name: 'AllUsers', component: AllUsers },
  { path: '/createuser', exact: true, name: 'CreateUser', component: CreateUser },
  { path: '/deleteuser', exact: true, name: 'DeleteUser', component: DeleteUser },
  { path: '/updateuser', exact: true, name: 'UpdateUser', component: UpdateUser },
];

export default routes;

