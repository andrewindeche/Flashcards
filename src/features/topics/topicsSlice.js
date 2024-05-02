import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        addTopic:(state,action) => {
            const { id, name, icon} = action.payload;
            const newTopic = { id, name, icon,quizIds: [] };
            state.topics[id] = newTopic;
        }
    },
})
export const selectTopics = (state) => state.topics.topics;
export const topicsSelector = createSelector(
    [selectTopics],
  (topics) => topics
);

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;