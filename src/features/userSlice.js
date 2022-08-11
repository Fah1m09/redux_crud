import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UsersData } from "../data/userdata";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },

        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.name = action.payload.name;
                    user.username = action.payload.username;
                    user.email = action.payload.email;
                    user.website = action.payload.website;
                }
            });
        },
    },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;