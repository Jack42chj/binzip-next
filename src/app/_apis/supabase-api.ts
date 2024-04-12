import React from "react";
import { createClient } from "../_utils/supabase";

const supabase = createClient();

// Main화면 영상 조회
export const getList = React.cache(async (keyword: string) => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order(keyword, { ascending: keyword === "createdAt" ? true : false })
        .limit(10);
    if (!list) {
        return [];
    }

    return list;
});

// 더보기 영상 조회
export const getTopData = React.cache(async (keyword: string) => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order(keyword, { ascending: keyword === "createdAt" ? true : false })
        .limit(20);
    if (!list) {
        return [];
    }

    return list;
});

// 검색한 영상 결과
export const getResultData = React.cache(async (keyword: string) => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .or(`title.ilike.%${keyword}%, category.ilike.%${keyword}%`);
    if (!list) {
        return [];
    }
    return list;
});

// 선택한 제목의 영상 조회
export const getVideoData = React.cache(async (title: string) => {
    const { data: list, error } = await supabase
        .from("binzip")
        .select(
            `title, createdAt, api, link, like, category, actor, director, description`
        )
        .eq("title", title);
    if (!list) {
        console.error(error);
        return [];
    }
    return list;
});

// 검색 카테고리 영상 결과
export const getCategoryData = React.cache(async (keyword: string) => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .or(`category.ilike.%${keyword}%`);
    if (!list) {
        return [];
    }
    return list;
});

// 로그인
export const googleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            queryParams: {
                access_type: "offline",
                prompt: "consent",
            },
            redirectTo: "http://localhost:3000",
        },
    });
};

// 로그아웃
export const LogOut = async () => {
    const { error } = await supabase.auth.signOut();
};

// 유저 정보 불러오기
export const getUserInfo = async () => {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session;
    if (session)
        return {
            name: session.user.user_metadata.name,
            email: session.user.user_metadata.email,
            avatar: session.user.user_metadata.avatar_url,
        };
    else return null;
};
