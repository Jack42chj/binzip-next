import Image from "next/image";
import Link from "next/link";

const SearchBox = () => {
    return (
        <Link
            href="/search"
            className="cursor-pointer max-w-xl w-full h-16 flex items-center gap-4 bg-secondary rounded-full mx-5 my-2.5 py-4 px-6"
        >
            <Image
                alt="search-icon"
                src="/svg/search.svg"
                height={24}
                width={24}
            />
            드라마 제목이나 장르를 검색해보세요
        </Link>
    );
};

export default SearchBox;
