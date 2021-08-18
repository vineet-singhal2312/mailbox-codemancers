import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  mails: [],
  mail: {},
};
export const fetchMails = createAsyncThunk("mail/fetchMails", async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
  );
  return response.data;
});

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setMail: (state, action) => {
      return {
        ...state,
        mail: action.payload,
      };
    },
  },
  extraReducers: {
    [fetchMails.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.mails = action.payload;
    },
    [fetchMails.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMails.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { setMail } = mailSlice.actions;

export default mailSlice.reducer;
