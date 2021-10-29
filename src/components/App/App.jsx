import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import PrivateRoute from '../Routers/PrivateRoute';
import PublicRoute from '../Routers/PublicRouter';
import AppBar from '../AppBar';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './App.module.css';

const AsyncHomeView = lazy(() => import('../../views/HomeView'));
const AsyncLoginView = lazy(() => import('../../views/LoginView'));
const AsyncRegisterView = lazy(() => import('../../views/RegisterView'));
const AsyncContactsView = lazy(() => import('../../views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={2000}
            display="flex"
            justify-content="center"
            className={s.loader}
          />
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <AsyncHomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <AsyncRegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <AsyncLoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <AsyncContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  ) : null;
}
