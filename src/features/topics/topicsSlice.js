import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

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
        },
        extraReducers: (builder) => {
            builder.addCase(addQuiz, (state, action) => {
                const { topicId, id } = action.payload;
                if (state.topics[topicId]) {
                    state.topics[topicId].quizIds.push(id);
                }
            });
        }
    },
})
export const selectTopics = (state) => state.topics.topics;
export const topicsSelector = createSelector(
    [selectTopics],
  (topics) => topics
);

export const { addTopic, addQuizzesId } = topicsSlice.actions;
export default topicsSlice.reducer;