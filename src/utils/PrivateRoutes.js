import { Outlet, Navigate } from 'react-router-dom';
import constants from './constants';

const PrivateRoutes = () => {
  const token = localStorage.getItem(constants.KEY_TOKEN_NAME);
  return ( token ? <Outlet /> : <Navigate to="/login" /> );
}

export default PrivateRoutes;