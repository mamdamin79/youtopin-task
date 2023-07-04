import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos",async(_,{rejectWithValue})=>{
  try{
    const response = await axios.get("http://localhost:3001/todos");
  }catch{
    return rejectWithValue([],error.message)
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
      return {...state, todos:[] , error:action.payload, loading:false}
    }
  }
})

// Action creators are generated for each case reducer function
export const {} = todosSlice.actions

export default todosSlice.reducer