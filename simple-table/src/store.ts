import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {data, TableData, TableDataList} from "./data";

interface TableSlice {
    data: TableDataList;
}

const initialState: TableSlice = {
    data: data
};

const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {
        createArticle: (state: TableSlice, action: PayloadAction<TableData>) => {
            state.data.list.splice(0, 1, action.payload);
        },
        deleteArticle: (state: TableSlice, action: PayloadAction<string>) => {
            const index = state.data.list.findIndex((item) => {
                return item.key === action.payload
            });

            if (index > -1) {
                state.data.list.splice(0, 1);
            }
        },
    },
});

export const store = configureStore({
    reducer: tableSlice.reducer,
});

export const {
    createArticle,
    deleteArticle
} = tableSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;