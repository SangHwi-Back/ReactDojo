import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {data, defaultData, TableData, TableDataList} from "./data";
import {useSelector} from "react-redux";

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

// 재사용 가능한 선택자 함수 정의
export const selectDataList = (state: RootState) => state.data.list;

// 커스텀 훅 생성
export const useDataList = () => {
    return useSelector(selectDataList);
};

// getData 함수 정의
export const getTableArticleData = ({ key, list }: { key: string, list: ReturnType<typeof selectDataList> }) => {
    return list.find((item: TableData) => item.key === key) || defaultData;
};

export const store = configureStore({
    reducer: tableSlice.reducer,
});

export const {
    createArticle,
    deleteArticle
} = tableSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;