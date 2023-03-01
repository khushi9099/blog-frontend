import {createAsyncThunk, createSlice } from "@redux-toolkit";
import axios from 'axios';
 //register action

 export const registerUserAction = createAsynkThunk(
    "users/register",
     async (user, {rejectWithValue, getState, dispatch}) => {
        try{
            //http call
            const config = {
                headers:{
                    "Content-Type": "application/json",
                },
            };
            const res = await axios.post()
        }catch (error){

        }
    }
 );
