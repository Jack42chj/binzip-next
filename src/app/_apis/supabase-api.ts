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
    const { data: list } = await supabase
        .from("binzip")
        .select(
            `title, createdAt, api, link, like, view, category, actor, director, description`
        )
        .eq("title", title);
    if (!list) {
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

// 좋아요 목록 결과
export const getFavoriteList = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
            const userId = data.user.id;
            return { status: 200, data: await getBucket(userId) };
        }
        return { status: 200, data: null };
    } else {
        return { status: 403, data: null };
    }
};

// 원래 BinZip DB에서 정보 찾아오기
const getBucket = async (userId: string) => {
    const { data } = await supabase
        .from("binzip_user")
        .select("like_bucket")
        .eq("id", userId);
    if (!data) {
        return [];
    }
    const resultPromises = data[0].like_bucket.map(async (title: string) => {
        const { data: list, error } = await supabase
            .from("binzip")
            .select("title, img, actor, category, like")
            .eq("title", title);

        if (error) {
            console.error("Error fetching binzip data:", error);
            return null;
        }

        return list ? list[0] : null;
    });
    const results = await Promise.all(resultPromises);
    return results.filter((result) => result !== null);
};

// 조회수 증가
export const setView = async (title: string, count: number) => {
    const { error } = await supabase
        .from("binzip")
        .update({
            view: count + 1,
        })
        .eq("title", title);
};

// 좋아요 현재 상태 확인
export const CheckLiked = async (title: string) => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
        const userId = data.user.id;
        const status = await findLikefromBucket(title, userId);
        if (status === false) {
            return true; // 좋아요 이미 누른 상태
        } else return false; // 좋아요 안 누른 상태
    }
};

// 좋아요를 아이디와 영상 제목으로 리스트에서 찾기
const findLikefromBucket = async (title: string, userId: string) => {
    const { data } = await supabase
        .from("binzip_user")
        .select("like_bucket")
        .eq("id", userId);
    if (data) {
        const check = data[0].like_bucket.includes(title);
        if (check === true) return false; // 좋아요 이미 누른 상태
        else return true; // 좋아요 안 누른 상태
    } else return true; // 좋아요 안 누른 상태
};

// 좋아요 추가
export const addLikeBucket = async (title: string, like: number) => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
        const userId = data.user.id;
        await appendBucket(title, userId);
        await addLikeCount(title, like);
    }
};

// 리스트에 추가
const appendBucket = async (title: string, userId: string) => {
    const { data, error } = await supabase.rpc("append_like_bucket", {
        title: title,
        user_id: userId,
    });
};

// 좋아요 카운트 증가
const addLikeCount = async (title: string, count: number) => {
    const { error } = await supabase
        .from("binzip")
        .update({
            like: count + 1,
        })
        .eq("title", title);
};

// 좋아요 삭제
export const deleteLikeBucket = async (title: string, like: number) => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
        const userId = data.user.id;
        await removeBucket(title, userId);
        await subLikeCount(title, like);
    }
};

// 리스트에서 제거
const removeBucket = async (title: string, userId: string) => {
    const { data, error } = await supabase.rpc("remove_like_bucket", {
        title: title,
        user_id: userId,
    });
};

// 좋아요 카운트 감소
const subLikeCount = async (title: string, count: number) => {
    const { error } = await supabase
        .from("binzip")
        .update({
            like: count - 1,
        })
        .eq("title", title);
};

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
