import Image from "next/image";
import Link from "next/link";

const genreList = [
    { name: "액션", src: "/webp/action.webp" },
    { name: "판타지", src: "/webp/fantasy.webp" },
    { name: "로맨스", src: "/webp/romance.webp" },
    { name: "코미디", src: "/webp/comedy.webp" },
    { name: "범죄", src: "/webp/crime.webp" },
    { name: "미스터리", src: "/webp/mystery.webp" },
    { name: "스포츠", src: "/webp/sports.webp" },
    { name: "사극", src: "/webp/history.webp" },
];

const CategoryList = () => {
    return (
        <div className="w-full gap-4 px-5 grid grid-cols-4 max-[1024px]:grid-cols-2 max-[1024px]:gap-4 max-[481px]:flex max-[481px]:flex-col">
            {genreList.map((item) => (
                <Link
                    key={item.name}
                    href={`/category/${encodeURIComponent(item.name)}`}
                >
                    <div className="cursor-pointer transition-transform duration-350 hover:scale-105">
                        <Image
                            className="rounded-xl bg-skeleton h-[240px] object-cover"
                            alt={item.name}
                            src={item.src}
                            style={{ width: "100%", height: "auto" }}
                            width={480}
                            height={240}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryList;

//test
