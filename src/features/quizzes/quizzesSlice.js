import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
}

export const quizzesSlice = createSlice({
    name: 'quizzes/createQuizzes',
    initialState,
    reducers: {
        addQuizz: (state,action) => {
            const { id,name,topicId} = action.payload;
            const newQuiz = { id,name,topicId,cardIds: [] };
            state.quizzes.id = newQuiz;
        }
    }

})
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const quizzesSelector = createSelector(
        [selectQuizzes],
        (quizzes) => quizzes
)

export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;