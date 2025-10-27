// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     isAuthenticated: false,
//     isLoading: false,
//     user: null
// }


// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers:{
//         setUser:(state, action)=>{

//         }
//     }
    
// })


// export const {setUser} = authSlice.actions;
// export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;



