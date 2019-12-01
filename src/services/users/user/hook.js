import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './actions';

export const useUser = () => {
  const { user, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return {
    getUser: () => dispatch(getUser()),
    user,
    loading,
    error,
  };
};
