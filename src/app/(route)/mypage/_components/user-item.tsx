import Image from "next/image";

const itemList = [
    { name: "위치 설정", src: "/svg/like.svg", path: "/map-setting" },
    { name: "찜 관리", src: "/svg/like.svg", path: "/map-setting" },
    { name: "리뷰 관리", src: "/svg/like.svg", path: "/map-setting" },
];

const UserItem = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col justify-center gap-7 my-4">
                <div className="text-white font-bold">My 메뉴</div>
                {itemList.map((item) => (
                    <div
                        className="cursor-pointer flex items-center gap-4 text-white"
                        key={item.name}
                    >
                        <Image
                            alt="user-icon"
                            src={item.src}
                            width={28}
                            height={28}
                        />
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center gap-7 mt-4">
                <div className="text-white font-bold">고객 문의</div>
                <div className="cursor-pointer flex items-center gap-4">
                    <Image
                        alt="user-icon"
                        src="/svg/like.svg"
                        width={28}
                        height={28}
                    />
                    <div className="flex flex-col gap-2 text-white">
                        <div>이메일</div>
                        <div>gildong@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
