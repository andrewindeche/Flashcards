import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addcard:(state,action) => {
            const { id,front,back } = action.payload;
            const newCard = {id,front,back};
            state.cards[id] = newCard;
        }
    }
})
export default cardsSlice.reducer