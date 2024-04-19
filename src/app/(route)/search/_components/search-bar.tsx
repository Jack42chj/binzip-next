"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

const SearchBar = ({ keyword }: KeywordProps) => {
    const router = useRouter();
    const [newKeyword, setKeyword] = useState(keyword);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newKeyword === "") return;
        router.push(`/search/${newKeyword}`);
    };

    const onClickCancle = () => {
        setKeyword("");
    };

    const onClickIcon = () => {
        if (newKeyword === "") return;
        router.push(`/search/${newKeyword}`);
    };

    return (
        <form
            className="w-full max-w-[632px] flex relative items-center"
            onSubmit={handleSubmit}
        >
            <input
                className="cursor-pointer text-base font-Pretendard w-full px-3 py-2 bg-secondary rounded-xl text-white outline-none"
                onChange={onChange}
                placeholder="드라마 제목이나 장르를 검색해보세요"
                type="text"
                value={newKeyword}
            />
            <Image
                className="cursor-pointer absolute right-3"
                alt="search-icon"
                src="/svg/search.svg"
                height={20}
                width={20}
                onClick={onClickIcon}
            />
            {newKeyword !== "" && (
                <Image
                    className="cursor-pointer absolute right-11"
                    alt="cancle-icon"
                    src="/svg/cancle.svg"
                    height={20}
                    width={20}
                    onClick={onClickCancle}
                />
            )}
        </form>
    );
};

export default SearchBar;

//test
