import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://events-60fo.onrender.com/api/events';

const fetchThunk = type =>
  createAsyncThunk(type, async ({ sortBy, order, page }, thunkAPI) => {
    const params = { sortBy, order, page, limit: 12 };
    try {
      const { data } = await axios.get('/', {
        params,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const getEventThunk = createAsyncThunk(
  'events/getEvent',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addParticipantThunk = createAsyncThunk(
  'events/addParticipant',
  async (participantData, thunkAPI) => {
    const { data, id } = participantData;
    try {
      await axios.post(`/${id}/registration`, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchParticipantsThunk = createAsyncThunk(
  'events/fetchParticipants',
  async (data, thunkAPI) => {
    const { id, search = '' } = data;
    try {
      const { data } = await axios.get(`/${id}/participants?search=${search}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchEventsThunk = fetchThunk('events/fetchEvents');
export const fetchMoreEventsThunk = fetchThunk('events/paginationEvents');
