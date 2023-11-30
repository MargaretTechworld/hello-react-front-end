import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
  error: '',
};
const API_URL = 'http://localhost:3000/v1/messages';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const greeting = await fetch(API_URL);
  const data = await greeting.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.greetings = action.payload;
      })
      .addCase(getGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { filter, checkTyping } = greetingSlice.actions;
export default greetingSlice.reducer;
