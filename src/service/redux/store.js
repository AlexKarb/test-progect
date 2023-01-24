import { configureStore } from '@reduxjs/toolkit';
import { authPersistReducer } from './auth';
import { persistStore } from 'redux-persist';
import { baseApi } from './api';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
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
