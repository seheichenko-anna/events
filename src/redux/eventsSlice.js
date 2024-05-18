import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addParticipantThunk,
  fetchParticipantsThunk,
  fetchEventsThunk,
  fetchMoreEventsThunk,
  getEventThunk,
} from './operations';

const initialState = {
  events: [],
  participants: [],
  isLoading: false,
  error: null,
  hasMore: true,
  page: 1,
  event: [],
};

const slice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchEventsThunk.fulfilled, (state, { payload }) => {
        state.page = 1;
        state.hasMore = payload.length > 0;
        state.events = payload;
        state.isLoading = false;
      })
      .addCase(fetchMoreEventsThunk.fulfilled, (state, { payload }) => {
        state.page = state.page + 1;
        state.events = [...state.events, ...payload];
        state.hasMore = payload.length > 0;
        state.isLoading = false;
      })
      .addCase(addParticipantThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(fetchParticipantsThunk.fulfilled, (state, { payload }) => {
        state.participants = payload;
        state.isLoading = false;
      })
      .addCase(getEventThunk.fulfilled, (state, { payload }) => {
        state.event = payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchEventsThunk.pending,
          addParticipantThunk.pending,
          fetchParticipantsThunk.pending,
          getEventThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchEventsThunk.rejected,
          addParticipantThunk.rejected,
          fetchParticipantsThunk.rejected,
          getEventThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectEvents: state => state.events,
    selectPage: state => state.page,
    selectParticipants: state => state.participants,
    selectIsLoading: state => state.isLoading,
    selectError: state => state.error,
    selectHasMore: state => state.hasMore,
    selectEvent: state => state.event,
  },
});

export const eventsReducer = slice.reducer;
export const {
  selectEvent,
  selectEvents,
  selectIsLoading,
  selectError,
  selectParticipants,
  selectHasMore,
  selectPage,
} = slice.selectors;
