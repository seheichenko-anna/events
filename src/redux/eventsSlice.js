import { createSlice } from '@reduxjs/toolkit';
import { fetchEventsThunk } from './operations';

const initialState = {
  events: [],
  participants: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchEventsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEventsThunk.fulfilled, (state, { payload }) => {
        state.events = payload;
        state.isLoading = false;
      })
      .addCase(fetchEventsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectEvents: state => state.events,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
  },
});

export const eventsReducer = slice.reducer;
// export const { addContact, deleteContact } = slice.actions;
export const { selectEvents, selectIsLoading, selectError } = slice.selectors;
