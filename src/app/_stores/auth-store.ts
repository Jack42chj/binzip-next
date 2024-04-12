import { create } from "zustand";

interface UserInfoType {
    name: string;
    email: string;
    avatar: string;
}

interface UserState {
    userInfo: UserInfoType;
}

interface UserAction {
    setUser: (userInfo: UserInfoType) => void;
    deleteUser: () => void;
}

const defaultState = { name: "", email: "", avatar: "" };

const useAuthInfo = create<UserState & UserAction>((set) => ({
    userInfo: defaultState,
    setUser: (userInfo: UserInfoType) => {
        set({ userInfo });
    },
    deleteUser: () => {
        set({ userInfo: defaultState });
    },
}));

export default useAuthInfo;
