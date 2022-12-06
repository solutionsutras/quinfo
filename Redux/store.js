import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cartItems from './Reducers/cartItem';

// const reducers = combineReducers({
//     cartItems: cartItems,
// })

export const store = configureStore({
  reducer: { cartItems: cartItems },
  middleware: [thunk, logger],
});

// export default store;
