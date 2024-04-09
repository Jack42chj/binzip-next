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
