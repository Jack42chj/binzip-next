"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

const ResultHeader = ({ keyword }: KeywordProps) => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full sticky top-0 z-50 flex justify-center ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}
        >
            <div className="w-full h-14 flex justify-between items-center px-5 my-2">
                <div className="cursor-pointer" onClick={() => router.back()}>
                    <Image
                        alt="chevron-left-icon"
                        src="/svg/chevron-left.svg"
                        height={32}
                        width={32}
                    />
                </div>
                <SearchBar keyword={keyword} />
            </div>
        </div>
    );
};

export default ResultHeader;
