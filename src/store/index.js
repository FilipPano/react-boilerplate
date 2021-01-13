import { configureStore } from '@reduxjs/toolkit';
import { QueryCache } from 'react-query';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: Infinity, // Change to milliseconds in case you want to refetch data in the background
      cacheTime: Infinity, // Change to milliseconds in case you want to garbage collect unused data
      retry: false,
    },
  },
});
