import React from "react";
import { createClient } from "../_utils/supabase";

const supabase = createClient();

// Main화면 인기 영상 조회
export const getPopularList = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("like", { ascending: false })
        .limit(10);
    if (!list) {
        return [];
    }

    return list;
});

// Main화면 최신 업로드 영상 조회
export const getLatestList = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("createdAt", { ascending: false })
        .limit(10);
    if (!list) {
        return [];
    }
    return list;
});

// Main화면 조회수 높은 영상 조회
export const getViewList = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("view", { ascending: false })
        .limit(10);
    if (!list) {
        return [];
    }
    return list;
});

// 인기 영상 상세 조회
export const getPopularData = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("like", { ascending: false })
        .limit(20);
    if (!list) {
        return [];
    }
    return list;
});

// 최신 업로드 영상 상세 조회
export const getLatestData = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("createdAt", { ascending: true })
        .limit(20);
    if (!list) {
        return [];
    }
    return list;
});

// 조회수 높은 영상 상세 조회
export const getViewData = React.cache(async () => {
    const { data: list } = await supabase
        .from("binzip")
        .select(`title, img`)
        .order("view", { ascending: false })
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
