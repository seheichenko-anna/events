import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://events-60fo.onrender.com/api/events';

export const fetchEventsThunk = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
