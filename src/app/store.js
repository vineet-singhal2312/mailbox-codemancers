import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mail/MailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
