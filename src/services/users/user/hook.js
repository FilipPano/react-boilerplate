import { useQuery } from 'react-query';
import { getUserAPI } from './api';

const USER_QUERY_KEY = 'user';

export const useUser = () => {
  const { data, isLoading, error, refetch } = useQuery(
    USER_QUERY_KEY,
    getUserAPI,
    {
      enabled: false,
    },
  );

  return {
    getUser: refetch,
    user: data,
    isLoading,
    error,
  };
};
