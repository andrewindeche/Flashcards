import { configureStore, useSelector } from "@reduxjs/toolkit";
import { topicSlice } from "../features/topics/topicsSlice";
import topicsReducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
