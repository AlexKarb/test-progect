import { configureStore } from '@reduxjs/toolkit';
import { authPersistReducer } from './auth';
import { persistStore } from 'redux-persist';
import { baseApi } from './api';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { requestSlice } from './request';

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    request: requestSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
