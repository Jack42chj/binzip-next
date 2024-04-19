"use client";

import { setView } from "@/app/_apis/supabase-api";
import { useEffect, useState } from "react";

interface ViewProps {
    title: string;
    view: number;
}

const useIncreaseView = ({ title, view }: ViewProps) => {
    const [viewCounted, setViewCounted] = useState(false);
    const increaseView = async () => {
        await setView(title, view);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!viewCounted) {
                increaseView();
                setViewCounted(true);
            }
        }, 6000);
        return () => clearTimeout(timer);
    });
    return;
};

export default useIncreaseView;

//test
