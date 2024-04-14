import Image from "next/image";

const itemList = [
    {
        name: "찜 관리",
        src: "/svg/plus.svg",
        path: "/map-setting",
        alt: "like-icon",
    },
    {
        name: "시청 기록",
        src: "/svg/tv.svg",
        path: "/map-setting",
        alt: "history-icon",
    },
    {
        name: "의견 보내기",
        src: "/svg/qa.svg",
        path: "/map-setting",
        alt: "qa-icon",
    },
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
                            alt={item.alt}
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
                        alt="mail-icon"
                        src="/svg/mail.svg"
                        width={28}
                        height={28}
                    />
                    <div className="flex flex-col gap-2 text-white">
                        <div>이메일</div>
                        <div>binzip@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
