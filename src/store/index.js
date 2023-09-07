import {configureStore,combineReducers} from "@reduxjs/toolkit";
import todoSlice from './todo/todoslice';
import counterSlice from './counter/counterslice';



// const store = configureStore({
//   reducer : {todoSlice,counterSlice},
// });

// export default store;

const store = configureStore({
  reducer: {
    todo: todoSlice,
    counter: counterSlice,
  },
});
export default store;