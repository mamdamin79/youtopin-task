import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos",async(_,{rejectWithValue})=>{
  try{
    const response = await axios.get("http://localhost:3001/todsos");
    return response
  }catch{
    return rejectWithValue([],error)
  }
})

const initialState = {
  todos:[],
  loading:false,
  error:null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers:{
    [getAsyncTodos.fulfilled] : (state,action)=>{
      return {...state, todos:action.payload , error:null,loading:false}
    },
    [getAsyncTodos.pending] : (state,action)=>{
      return {...state, todos:[] , error:null , loading:true}
    },
    [getAsyncTodos.rejected] : (state,action)=>{
      return {...state, todos:[] , error:action.error.message, loading:false}
    }
  }
})

// Action creators are generated for each case reducer function
export const {} = todosSlice.actions

export default todosSlice.reducer