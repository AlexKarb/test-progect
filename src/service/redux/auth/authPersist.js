import { persistReducer } from 'redux-persist';
import { authSlice } from './authSlice';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(authConfig, authSlice);
