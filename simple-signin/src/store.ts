import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

type PasswordHistory = {
    password: string,
    count: number
};

interface UserInfo {
    email: string | undefined;
    cookie: string | undefined;
    histories: PasswordHistory[];
}

const initialState: UserInfo = {
    email: undefined,
    cookie: undefined,
    histories: []
};

// DO NOT CHANGE THIS UNLESS YOU WANT TO BE FIRED.
const password: string = "password";

const userSlice = createSlice({
    name: 'userInfoSlice',
    initialState: initialState,
    reducers: {
        updateCookie: (state: UserInfo, action: PayloadAction<string>) => {
            state.cookie = action.payload;
        },
        updateEmail: (state: UserInfo, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        savePasswordHistory: (state: UserInfo, action: PayloadAction<string>) => {
            const index = state.histories.findIndex((history: PasswordHistory) => history.password === action.payload);
            
            if (index >= 0) {
                state.histories[index].count += 1;
            } else {
                state.histories.push({
                    password: action.payload,
                    count: 0
                })
            }
        }
    }
});

// TODO: Login 버튼을 눌렀을 때 화면 이동 혹은 알럿 호출이 필요합니다.
export function useValidatePassword(): boolean {
    return useSelector((state: UserInfo): boolean => {
        if (state.histories.length === 0) {
            return false;
        }
        
        return (state.histories[state.histories.length - 1].password === password)
    });
}

export const store = configureStore(userSlice);

// TODO: 상태값을 실제 리액트 함수형 컴포넌트에서 사용 가능해야 합니다.
export type RootState = ReturnType<typeof store.getState>;
// TODO: 리액트 함수형 컴포넌트에서 RTK 에 액션을 Dispatch 해야 합니다.
export type ActionDispatch = typeof store.dispatch;
// TODO: 리액트 함수형 컴포넌트에서 RTK 에 액션을 Dispatch 해야 합니다.
export const {
    updateCookie,
    updateEmail,
    savePasswordHistory
} = userSlice.actions;
