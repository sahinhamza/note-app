import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        filteredWord: ""
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        setFilteredWord: (state, action) => {
            state.filteredWord = action.payload
        },
        clearItems: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered
        }
    }
})

export const { addItem, setFilteredWord, clearItems } = notesSlice.actions;
export default notesSlice.reducer;