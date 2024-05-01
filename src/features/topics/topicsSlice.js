import { createSelector, createSlice,useSelector } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicSlice = createSlice({
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
export const selectTopics = (state) => state.topics;
export const topicsSelector = createSelector(
    [selectTopics],
  (topics) => topics
);

export const { addTopic } = topicSlice.actions;
export default topicSlice.reducer;