import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
name:'counter',
initialState:{counter:0},
reducers:{
    incrementFn(state,action){
     console.log("hiii");
         state.counter++;
    },
    decrementFn(state,action){
         state.counter--;
    },
    AddByFn(state,action){
         state.counter+=action.payload;
    }
}
});
export const {incrementFn,decrementFn,AddByFn}=counterSlice.actions;
export default counterSlice.reducer;
