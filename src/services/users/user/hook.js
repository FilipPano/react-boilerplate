import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'services/users/user/actions';

const useUser = () => {
  const { user, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return [() => dispatch(getUser()), { user, loading, error }];
};

export default useUser;
