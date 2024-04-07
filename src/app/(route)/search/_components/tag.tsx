const list = [
    { name: "액션" },
    { name: "빈센조" },
    { name: "로맨스" },
    { name: "범죄" },
    { name: "코미디" },
    { name: "사극" },
    { name: "연인" },
    { name: "별에서 온 그대" },
    { name: "미스터리" },
    { name: "드라마" },
    { name: "스토브리그" },
];

const Tag = () => {
    return (
        <div className="w-full flex flex-wrap gap-4 px-5">
            {list.map((item) => (
                <div
                    className="cursor-pointer bg-gray-800 rounded-full text-white font-bold py-3 px-4"
                    key={item.name}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default Tag;
